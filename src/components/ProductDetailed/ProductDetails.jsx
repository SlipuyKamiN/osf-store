import { useParams } from 'react-router-dom';
import {
  ProductDetailsSection,
  ProductInfoWrapper,
  ProductTitle,
} from './ProductDetails.styled';
import { useProducts } from 'context/ProductsContext';
import ProductTabs from './ProductTabs';
import ProductData from './ProductData';
import ProductGallery from './ProductGallery';

const ProductDetails = () => {
  const { allProducts } = useProducts();
  const { productId } = useParams();

  const item = allProducts.find(({ id }) => id === productId);

  return (
    <ProductDetailsSection>
      <ProductTitle>{item.title}</ProductTitle>
      <ProductInfoWrapper>
        <ProductGallery />
        <ProductData item={item} />
        <ProductTabs />
      </ProductInfoWrapper>
    </ProductDetailsSection>
  );
};

export default ProductDetails;
