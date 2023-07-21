import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import BenefitsContent from 'components/Homepage/BenefitsContent/BenefitsContent';
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
      <BreadCrumbs padding={['26px 44px 0', '48px 0 0']} />
      <ProductDetails item={allProducts.find(({ id }) => id === productId)} />
      <PopularItems />
      <ScrollToTop />
      <BenefitsContent />
    </ProductDetailedMain>
  );
};

export default ProductDetailed;
