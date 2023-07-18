import ImageGallery from 'react-image-gallery';
import { productDetailsImages } from 'data/productDetails';
import useWindowDimensions from 'hooks/useWindowDimensions';

const ProductGallery = ({ print = false }) => {
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  return (
    <ImageGallery
      additionalClass="product-details"
      items={productDetailsImages}
      thumbnailPosition={isMobileScreen && !print ? 'bottom' : 'right'}
      showThumbnails={true}
      showPlayButton={false}
      showNav={false}
      showBullets={isMobileScreen}
    />
  );
};

export default ProductGallery;
