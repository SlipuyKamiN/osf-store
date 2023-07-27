import ImageGallery from 'react-image-gallery';
import { BannerSection } from './BannerDescription.styled';
import SalesAd from './SalesAd';
import { carouselBannerImages } from 'data/sliderItems';

const CarouselBanner = () => {
  return (
    <BannerSection>
      <ImageGallery
        additionalClass="carousel-banner"
        originalWidth="100%"
        originalHeight="250px"
        items={carouselBannerImages}
        autoPlay={true}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
      />
      <SalesAd />
    </BannerSection>
  );
};

export default CarouselBanner;
