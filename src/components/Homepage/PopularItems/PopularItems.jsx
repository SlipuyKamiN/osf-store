import { popularItems, popularItemsMobile } from 'data/sliderItems';
import ImageGallery from 'react-image-gallery';
import { PopularItemsSection, SectionTitle } from './PopularItems.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import PopularItemsList from './PopularItemsList';

const PopularItems = () => {
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  return (
    <PopularItemsSection>
      <SectionTitle>Popular items</SectionTitle>
      {isMobileScreen ? (
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
      ) : (
        <PopularItemsList />
      )}
    </PopularItemsSection>
  );
};

export default PopularItems;
