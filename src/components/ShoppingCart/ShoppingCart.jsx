import {
  GoHomeLink,
  PageTitle,
  Section,
} from 'components/NonProduct/ErrorSection.styled';
import {
  CartItemsList,
  CartItemsSection,
  EmptyListTitle,
} from './ShoppingCart.styled';
import { useProducts } from 'context/ProductsContext';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const ShoppingCart = () => {
  const { cart } = useProducts();

  return (
    <Section>
      <PageTitle>Shopping cart</PageTitle>
      <CartItemsSection>
        {cart.length > 0 ? (
          <CartItemsList>
            {cart.map(item => {
              return <CartItem item={item} key={item.id} />;
            })}
          </CartItemsList>
        ) : (
          <EmptyListTitle className="icon-bag">
            <span>Oops, your cart is empty yet,</span>
            <GoHomeLink to="/">let`s buy something.</GoHomeLink>
          </EmptyListTitle>
        )}
      </CartItemsSection>
      <OrderSummary cart={cart} />
    </Section>
  );
};

export default ShoppingCart;
