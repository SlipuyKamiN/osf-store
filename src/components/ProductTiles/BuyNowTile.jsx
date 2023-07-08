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
      <Image src={imageUrl} alt={title} width="270px" />
      <BuyNowDescription>
        <BuyNowLink to="product-detailed">{title}</BuyNowLink>
        <BuyNowWrapper>
          <BuyNowPrice>$ {price}</BuyNowPrice>
          <BuyNowButton>Buy now</BuyNowButton>
        </BuyNowWrapper>
      </BuyNowDescription>
    </BasicCard>
  );
};

export default BuyNowTile;
