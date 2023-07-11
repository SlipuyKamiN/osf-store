import ImageGallery from 'react-image-gallery';
import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import { useParams } from 'react-router-dom';
import { ProductTitle } from './ProductDetails.styled';
import { productDetailsImages } from 'data/productDetails';
import useWindowDimensions from 'hooks/useWindowDimensions';

const ProductDetails = () => {
  const { productName } = useParams();
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  return (
    <section>
      <BreadCrumbs />
      <ProductTitle>{productName}</ProductTitle>
      <ImageGallery
        items={productDetailsImages}
        thumbnailPosition={isMobileScreen ? 'bottom' : 'right'}
        showThumbnails={true}
        showPlayButton={false}
        showNav={false}
        showBullets={isMobileScreen}
      />
    </section>
  );
};

export default ProductDetails;
