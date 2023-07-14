import { PageTitle, Section } from 'components/NonProduct/ErrorSection.styled';
import { CartItemsList, CartItemsSection } from './ShoppingCart.styled';
import { useProducts } from 'context/ProductsContext';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const { cart } = useProducts();

  return (
    <Section>
      <PageTitle>Shopping cart</PageTitle>
      <CartItemsSection>
        <CartItemsList>
          {cart.map(item => {
            return <CartItem item={item} key={item.id} />;
          })}
        </CartItemsList>
      </CartItemsSection>
    </Section>
  );
};

export default ShoppingCart;
