import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import PopularItems from 'components/ProductDetailed/PopularItems';
import ProductDetails from 'components/ProductDetailed/ProductDetails';
import {
  ProductDetailedMain,
  ScrollToTopButton,
} from 'components/ProductDetailed/ProductDetails.styled';

const ProductDetailed = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ProductDetailedMain>
      <BreadCrumbs />
      <ProductDetails />
      <PopularItems />

      <ScrollToTopButton type="button" onClick={handleScrollToTop}>
        Scroll to top
      </ScrollToTopButton>
    </ProductDetailedMain>
  );
};

export default ProductDetailed;
