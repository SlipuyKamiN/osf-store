import ImageGallery from 'react-image-gallery';
import BannerDescription from './BannerDescription';
import { BannerSection } from './BannerDescription.styled';
import bannerLeft from 'images/carousel-1.png';
import bannerCenter from 'images/carousel-2.jpg';
import bannerRight from 'images/carousel-3.jpg';
import SalesAd from './SalesAd';

const images = [
  {
    original: bannerLeft,
    thumbnail: bannerRight,
    description: <BannerDescription contentAlign={'left'} />,
  },
  {
    original: bannerCenter,
    thumbnail: bannerCenter,
    description: <BannerDescription contentAlign={'center'} />,
  },
  {
    original: bannerRight,
    thumbnail: bannerRight,
    description: <BannerDescription contentAlign={'right'} />,
  },
];

const CarouselBanner = () => {
  return (
    <BannerSection>
      <ImageGallery
        originalWidth="100%"
        originalHeight="250px"
        items={images}
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
