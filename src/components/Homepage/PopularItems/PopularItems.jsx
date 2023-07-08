import ImageGallery from 'react-image-gallery';
import { PopularItemsSection, SectionTitle } from './PopularItems.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import PopularItemsList from './PopularItemsList';
import { popularItems } from 'data/popularItems';
import MobileGalleryTile from 'components/ProductTiles/MobileGalleryTile';

const PopularItems = () => {
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  const galleryItems = popularItems.slice(0, 5).map(item => {
    return { original: '', description: <MobileGalleryTile item={item} /> };
  });

  return (
    <PopularItemsSection>
      <SectionTitle>Popular items</SectionTitle>
      {isMobileScreen ? (
        <ul>
          <ImageGallery
            additionalClass="popular-items"
            originalWidth="100%"
            originalHeight="250px"
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            items={galleryItems}
          />
        </ul>
      ) : (
        <PopularItemsList />
      )}
    </PopularItemsSection>
  );
};

export default PopularItems;
