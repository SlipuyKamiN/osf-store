import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import PopularItems from 'components/ProductDetailed/PopularItems';
import ProductDetails from 'components/ProductDetailed/ProductDetails';
import { ProductDetailedMain } from 'components/ProductDetailed/ProductDetails.styled';
import ScrollToTop from 'components/ProductDetailed/ScrollToTop';
import { useProducts } from 'context/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetailed = () => {
  const { allProducts } = useProducts();
  const { productId } = useParams();

  return (
    <ProductDetailedMain>
      <BreadCrumbs padding={['26px 0 0', '48px 0 0']} />
      <ProductDetails item={allProducts.find(({ id }) => id === productId)} />
      <PopularItems />
      <ScrollToTop />
    </ProductDetailedMain>
  );
};

export default ProductDetailed;
