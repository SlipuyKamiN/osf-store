import { popularItems, popularItemsMobile } from 'data/sliderItems';
import ImageGallery from 'react-image-gallery';
import { PopularItemsSection, SectionTitle } from './PopularItems.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

const PopularItems = () => {
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  return (
    <PopularItemsSection>
      <SectionTitle>Popular items</SectionTitle>
      <ImageGallery
        additionalClass="popular-items"
        originalWidth="100%"
        originalHeight="250px"
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        items={popularItemsMobile}
      />
    </PopularItemsSection>
  );
};

export default PopularItems;
