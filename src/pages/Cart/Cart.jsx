import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import ShoppingCart from 'components/ShoppingCart/ShoppingCart';
import { ShoppingCartMain } from 'components/ShoppingCart/ShoppingCart.styled';

const Cart = () => {
  return (
    <ShoppingCartMain>
      <BreadCrumbs padding={['26px 0 0', '48px 0 0']} />
      <ShoppingCart />
    </ShoppingCartMain>
  );
};

export default Cart;
