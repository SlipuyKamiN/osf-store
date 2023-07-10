import { Link } from 'react-router-dom';
import { BasicCard, Image } from './BasicTile.styled';
import {
  BuyNowButton,
  BuyNowDescription,
  BuyNowLink,
  BuyNowPrice,
  BuyNowWrapper,
} from './BuyNowTile.styled';

const BuyNowTile = ({ item: { imageUrl, title, price } }) => {
  return (
    <BasicCard>
      <Link to="product-detailed">
        <Image src={require(`../../${imageUrl}`)} alt={title} width="270px" />
      </Link>
      <BuyNowDescription>
        <BuyNowLink to="product-detailed">{title}</BuyNowLink>
        <BuyNowWrapper>
          <BuyNowPrice to="product-detailed">$ {price}</BuyNowPrice>
          <BuyNowButton type="button">Buy now</BuyNowButton>
        </BuyNowWrapper>
      </BuyNowDescription>
    </BasicCard>
  );
};

export default BuyNowTile;
