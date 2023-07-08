import BuyNowTile from 'components/ProductTiles/BuyNowTile';
import PricedTile from 'components/ProductTiles/PricedTile';
import CommentedTile from 'components/ProductTiles/CommentedTile';

const ListItem = ({ item }) => {
  const { original, buyNow = false, comment = null } = item;

  if (comment) {
    return <CommentedTile original={original} comment={comment} />;
  }
  if (buyNow) {
    return <BuyNowTile item={item} />;
  }

  return <PricedTile item={item} />;
};

export default ListItem;
