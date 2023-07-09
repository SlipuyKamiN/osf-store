import { useState } from 'react';
import { productItems } from 'data/productItems';
import ListItem from './ListItem';
import { ItemsList, LoadMoreButton } from './PopularItemsList.styled';

const PopularItemsList = () => {
  const [items] = useState(productItems);
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(1);

  const itemsToRender = items.slice(0, page * 8);

  const incrementPage = () => {
    if (isLastPage) {
      return;
    }

    setPage(prevPage => {
      if ((prevPage + 1) * 8) {
        setIsLastPage(true);
      }

      return prevPage + 1;
    });
  };

  return (
    <>
      <ItemsList>
        {itemsToRender.map(item => (
          <ListItem item={item} key={item.title + item.price} />
        ))}
      </ItemsList>
      {!isLastPage && (
        <LoadMoreButton type="button" onClick={incrementPage}>
          Load more
          <span className="icon-arrow"></span>
        </LoadMoreButton>
      )}
    </>
  );
};

export default PopularItemsList;
