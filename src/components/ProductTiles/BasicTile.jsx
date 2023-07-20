import {
  Image,
  BasicCard,
  BasicDescription,
  BasicLabel,
  BasicTitle,
} from './BasicTile.styled';
import PropTypes from 'prop-types';

const BasicTile = ({ item: { imageUrl, title, label } }) => {
  return (
    <BasicCard>
      <Image src={imageUrl} alt={title} width="270px" />
      <BasicDescription>
        <BasicTitle>{title}</BasicTitle>
        <BasicLabel>{label}</BasicLabel>
      </BasicDescription>
    </BasicCard>
  );
};

export default BasicTile;

BasicTile.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    price: PropTypes.number,
    buyNow: PropTypes.bool,
    description: PropTypes.string,
    comment: PropTypes.object,
  }).isRequired,
};
