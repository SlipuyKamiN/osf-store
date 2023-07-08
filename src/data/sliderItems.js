import BannerDescription from 'components/Homepage/CarouselBanner/BannerDescription';
import bannerLeft from 'images/carousel-1.png';
import bannerCenter from 'images/carousel-2.jpg';
import bannerRight from 'images/carousel-3.jpg';

export const carouselBannerImages = [
  {
    original: bannerLeft,
    description: <BannerDescription contentAlign={'left'} />,
  },
  {
    original: bannerCenter,
    description: <BannerDescription contentAlign={'center'} />,
  },
  {
    original: bannerRight,
    description: <BannerDescription contentAlign={'right'} />,
  },
];
