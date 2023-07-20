import { useState } from 'react';
import {
  Item,
  ItemImage,
  ItemInfoWrapper,
  ItemPrice,
  ItemRemoveButton,
  ItemTitle,
  ItemTotalPrice,
  ItemTotalPriceWrapper,
} from './CartItem.styled';
import PropTypes from 'prop-types';
import { useProducts } from 'context/ProductsContext';
import ItemCounter from 'components/Global/ItemCounter';
import { notification } from 'components/Global/notification';

const CartItem = ({ item: { id, title, price, imageUrl, orderQuantity } }) => {
  const [itemQunatity, setItemQuantity] = useState(orderQuantity);
  const { reducer } = useProducts();

  const handleUpdateQuantity = orderQuantity => {
    reducer('cart/updateQuantity', { id, orderQuantity });
    setItemQuantity(orderQuantity);
  };

  const handleRemoveItem = () => {
    reducer('cart/remove', id);

    notification(`Item "${title}" has been removed from your cart`, 'success');
  };

  return (
    <Item>
      <ItemInfoWrapper>
        <ItemImage width="96px" src={imageUrl} />
        <div>
          <ItemTitle>{title}</ItemTitle>
          <ItemPrice>${price}</ItemPrice>
        </div>
      </ItemInfoWrapper>
      <ItemTotalPriceWrapper>
        <ItemCounter
          orderQuantity={itemQunatity}
          setOrderQuantity={handleUpdateQuantity}
        />
        <ItemTotalPrice>
          {`$${Number(price) * Number(orderQuantity)}`}
        </ItemTotalPrice>
        <ItemRemoveButton onClick={handleRemoveItem}>+</ItemRemoveButton>
      </ItemTotalPriceWrapper>
    </Item>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    buyNow: PropTypes.bool,
    label: PropTypes.string,
    description: PropTypes.string,
    comment: PropTypes.object,
    orderQuantity: PropTypes.number.isRequired,
  }).isRequired,
};
