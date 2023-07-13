import { Link } from 'react-router-dom';
import { BasicCard, Image } from './BasicTile.styled';
import {
  BuyNowButton,
  BuyNowDescription,
  BuyNowLink,
  BuyNowPrice,
  BuyNowWrapper,
} from './BuyNowTile.styled';

const BuyNowTile = ({ item }) => {
  const { imageUrl, id, title, price } = item;

  return (
    <BasicCard>
      <Link to={`product-detailed/${id}/${title}/description`}>
        <Image src={require(`../../${imageUrl}`)} alt={title} width="270px" />
      </Link>
      <BuyNowDescription>
        <BuyNowLink to={`product-detailed/${id}/${title}/description`}>
          {title}
        </BuyNowLink>
        <BuyNowWrapper>
          <BuyNowPrice to={`product-detailed/${id}/${title}/description`}>
            $ {price}
          </BuyNowPrice>
          <BuyNowButton type="button">Buy now</BuyNowButton>
        </BuyNowWrapper>
      </BuyNowDescription>
    </BasicCard>
  );
};

export default BuyNowTile;
