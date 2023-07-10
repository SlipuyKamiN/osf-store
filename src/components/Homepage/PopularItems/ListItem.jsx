import BuyNowTile from 'components/ProductTiles/BuyNowTile';
import PricedTile from 'components/ProductTiles/PricedTile';
import CommentedTile from 'components/ProductTiles/CommentedTile';

const ListItem = ({ item }) => {
  const { imageUrl, buyNow = false, comment = null } = item;

  if (comment) {
    return <CommentedTile imageUrl={imageUrl} comment={comment} />;
  }
  if (buyNow) {
    return <BuyNowTile item={item} />;
  }

  return <PricedTile item={item} />;
};

export default ListItem;
