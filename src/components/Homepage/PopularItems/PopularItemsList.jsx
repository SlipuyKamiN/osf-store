import { useState } from 'react';
import ListItem from './ListItem';
import { ItemsList, LoadMoreButton } from './PopularItemsList.styled';
import { useProducts } from 'context/ProductsContext';

const PopularItemsList = () => {
  const { allProducts } = useProducts();
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(1);

  const itemsToRender = allProducts.slice(0, page * 8);

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
