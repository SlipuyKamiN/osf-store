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
import { useProducts } from 'context/ProductsContext';
import ItemCounter from 'components/Global/ItemCounter';
import { notification } from 'components/Global/notification';

const CartItem = ({ item }) => {
  const [orderQuantity, setOrderQuantity] = useState(item.orderQuantity);
  const { reducer } = useProducts();

  const handleUpdateQuantity = quantity => {
    reducer('cart/updateQuantity', { id: item.id, orderQuantity: quantity });
    setOrderQuantity(quantity);
  };

  const handleRemoveItem = () => {
    reducer('cart/remove', item.id);

    notification(
      `Item "${item.title}" has been removed from your cart`,
      'success'
    );
  };

  return (
    <Item>
      <ItemInfoWrapper>
        <ItemImage width="96px" src={item.imageUrl} />
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>${item.price}</ItemPrice>
        </div>
      </ItemInfoWrapper>
      <ItemTotalPriceWrapper>
        <ItemCounter
          orderQuantity={orderQuantity}
          setOrderQuantity={handleUpdateQuantity}
        />
        <ItemTotalPrice>
          {`$${Number(item.price) * Number(item.orderQuantity)}`}
        </ItemTotalPrice>
        <ItemRemoveButton onClick={handleRemoveItem}>+</ItemRemoveButton>
      </ItemTotalPriceWrapper>
    </Item>
  );
};

export default CartItem;
