import {
  ProductDetailsSection,
  ProductInfoWrapper,
  ProductTitle,
} from './ProductDetails.styled';
import ProductTabs from './ProductTabs';
import ProductData from './ProductData';
import ProductGallery from './ProductGallery';

const ProductDetails = ({ item }) => {
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
