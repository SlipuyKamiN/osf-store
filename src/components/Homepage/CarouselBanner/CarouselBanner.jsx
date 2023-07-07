import ImageGallery from 'react-image-gallery';
import BannerDescription from './BannerDescription';
import { BannerSection } from './BannerDescription.styled';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description: <BannerDescription contentAlign={'left'} />,
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    description: <BannerDescription contentAlign={'center'} />,
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
    </BannerSection>
  );
};

export default CarouselBanner;
