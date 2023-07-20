import BuyNowTile from 'components/ProductTiles/BuyNowTile';
import PricedTile from 'components/ProductTiles/PricedTile';
import CommentedTile from 'components/ProductTiles/CommentedTile';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => {
  const { imageUrl, buyNow = false, comment = null } = item;

  if (comment) return <CommentedTile imageUrl={imageUrl} comment={comment} />;

  if (buyNow) return <BuyNowTile item={item} />;

  return <PricedTile item={item} />;
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    buyNow: PropTypes.bool,
    comment: PropTypes.object,
  }).isRequired,
};
