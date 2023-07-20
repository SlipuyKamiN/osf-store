import { BasicDescription, BasicTitle, Image } from './BasicTile.styled';
import { MobileCard } from './MobileGalleryTile.styled';
import { Price } from './PricedTile.styled';
import PropTypes from 'prop-types';

const MobileGalleryTile = ({ item: { imageUrl, title, price } }) => {
  return (
    <MobileCard>
      <Image src={imageUrl} alt={title} width="270px" />
      <BasicDescription>
        <BasicTitle>{title}</BasicTitle>
        <Price>$ {price}</Price>
      </BasicDescription>
    </MobileCard>
  );
};

export default MobileGalleryTile;

MobileGalleryTile.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    buyNow: PropTypes.bool,
    label: PropTypes.string,
    description: PropTypes.string,
    comment: PropTypes.object,
  }).isRequired,
};
