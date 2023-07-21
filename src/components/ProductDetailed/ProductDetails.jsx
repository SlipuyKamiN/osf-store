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
import PropTypes from 'prop-types';

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

ProductDetails.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
    buyNow: PropTypes.bool,
    label: PropTypes.string,
    description: PropTypes.string.isRequired,
    comment: PropTypes.object,
    orderQuantity: PropTypes.number,
  }),
};
