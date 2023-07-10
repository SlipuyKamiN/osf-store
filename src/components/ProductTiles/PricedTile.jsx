import { useProducts } from 'context/ProductsContext';
import { BasicTitle, Image } from './BasicTile.styled';
import {
  AddButton,
  Price,
  PricedCard,
  PricedDescription,
} from './PricedTile.styled';

const PricedTile = ({ item }) => {
  const { imageUrl, title, price } = item;
  const { reducer } = useProducts();

  return (
    <PricedCard>
      <Image src={require(`../../${imageUrl}`)} alt={title} width="270px" />
      <PricedDescription>
        <BasicTitle>{title}</BasicTitle>
        <Price>$ {price}</Price>
        <ul className="overlay">
          <li>
            <AddButton
              type="button"
              className="icon-plus"
              onClick={() => {
                reducer('cart/add', item);
              }}
            ></AddButton>
          </li>
          <li>
            <AddButton
              type="button"
              className="icon-heart-red"
              onClick={() => {
                reducer('wishlist/add', item);
              }}
            ></AddButton>
          </li>
        </ul>
      </PricedDescription>
    </PricedCard>
  );
};

export default PricedTile;
