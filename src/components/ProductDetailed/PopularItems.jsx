import ImageGallery from 'react-image-gallery';
import {
  ItemsList,
  PopularItemsSection,
  SectionTitle,
} from './PopularItems.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import MobileGalleryTile from 'components/ProductTiles/MobileGalleryTile';
import { useProducts } from 'context/ProductsContext';
import PricedTile from 'components/ProductTiles/PricedTile';

const PopularItems = () => {
  const { allProducts } = useProducts();
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;

  const galleryItems = allProducts.slice(0, 4).map(item => {
    return { original: '', description: <MobileGalleryTile item={item} /> };
  });

  return (
    <PopularItemsSection>
      <SectionTitle>Popular items</SectionTitle>
      {isMobileScreen ? (
        <ul>
          <ImageGallery
            additionalClass="popular-items dark-bullets"
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
        <ItemsList>
          {allProducts.slice(0, 4).map(item => (
            <PricedTile
              item={item}
              key={item.imageUrl}
              className="price-gray"
            />
          ))}
        </ItemsList>
      )}
    </PopularItemsSection>
  );
};

export default PopularItems;
