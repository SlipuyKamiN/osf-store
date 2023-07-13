import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import PopularItems from 'components/ProductDetailed/PopularItems';
import ProductDetails from 'components/ProductDetailed/ProductDetails';
import { ProductDetailedMain } from 'components/ProductDetailed/ProductDetails.styled';
import ScrollToTop from 'components/ProductDetailed/ScrollToTop';

const ProductDetailed = () => {
  return (
    <ProductDetailedMain>
      <BreadCrumbs padding={['26px 0 0', '48px 0 0']} />
      <ProductDetails />
      <PopularItems />
      <ScrollToTop />
    </ProductDetailedMain>
  );
};

export default ProductDetailed;
