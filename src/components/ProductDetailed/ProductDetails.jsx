import {
  ProductDetailsSection,
  ProductInfoWrapper,
  ProductTitle,
} from './ProductDetails.styled';
import ProductTabs from './ProductTabs';
import ProductData from './ProductData';
import ProductGallery from './ProductGallery';
import { useRef } from 'react';
import LoadingSpinner from 'components/Global/LoadingSpinner';

const ProductDetails = ({ item }) => {
  const componentToPrint = useRef();

  if (!item) {
    return <LoadingSpinner />;
  }

  return (
    <ProductDetailsSection>
      <ProductTitle>{item.title}</ProductTitle>

      <ProductInfoWrapper ref={componentToPrint}>
        <ProductGallery />
        <ProductData item={item} componentToPrint={componentToPrint} />
        <ProductTabs />
      </ProductInfoWrapper>
    </ProductDetailsSection>
  );
};

export default ProductDetails;
