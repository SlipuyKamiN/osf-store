import { useProducts } from 'context/ProductsContext';
import { BasicTitle, Image } from './BasicTile.styled';
import {
  AddButton,
  Price,
  PricedCard,
  PricedDescription,
} from './PricedTile.styled';
import PropTypes from 'prop-types';
import { notification } from 'components/Global/notification';

const PricedTile = ({ item: { imageUrl, title, price }, item }) => {
  const { reducer } = useProducts();

  const handleAddItem = type => {
    const response = reducer(`${type}/add`, { ...item, orderQuantity: 1 });

    if (response) return notification(response);

    notification(
      `Item "${item.title}" has been added to your ${type}`,
      'success'
    );
  };

  return (
    <PricedCard>
      <Image src={imageUrl} alt={title} width="270px" />
      <PricedDescription>
        <BasicTitle>{title}</BasicTitle>
        <Price>$ {price}</Price>
        <ul className="overlay">
          <li>
            <AddButton
              type="button"
              className="icon-plus"
              onClick={() => handleAddItem('cart')}
            ></AddButton>
          </li>
          <li>
            <AddButton
              type="button"
              className="icon-heart-red"
              onClick={() => handleAddItem('wishlist')}
            ></AddButton>
          </li>
        </ul>
      </PricedDescription>
    </PricedCard>
  );
};

export default PricedTile;

PricedTile.propTypes = {
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
