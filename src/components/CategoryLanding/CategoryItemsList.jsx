import { useState } from 'react';
import {
  CategoryList,
  CategoryListSection,
  LoadMoreButton,
} from './CategoryItemsList.styled';
import PricedTile from 'components/ProductTiles/PricedTile';

const CategoryItemsList = ({ allProducts }) => {
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
    <CategoryListSection>
      <CategoryList>
        {itemsToRender.map(item => (
          <PricedTile key={item.id} item={item} style={{ color: 'tomato' }} />
        ))}
      </CategoryList>
      {!isLastPage && (
        <LoadMoreButton type="button" onClick={incrementPage}>
          Load more
        </LoadMoreButton>
      )}
    </CategoryListSection>
  );
};

export default CategoryItemsList;
