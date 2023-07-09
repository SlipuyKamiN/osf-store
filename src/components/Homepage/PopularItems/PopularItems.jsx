import ImageGallery from 'react-image-gallery';
import { PopularItemsSection, SectionTitle } from './PopularItems.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import PopularItemsList from './PopularItemsList';
import MobileGalleryTile from 'components/ProductTiles/MobileGalleryTile';
import { useProducts } from 'context/ProductsContext';

const PopularItems = () => {
  const { allProducts } = useProducts();
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  const galleryItems = allProducts.slice(0, 5).map(item => {
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
