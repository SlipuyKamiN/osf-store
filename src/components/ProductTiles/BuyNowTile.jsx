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
      <Link to={`OSF-Theme/${title}`}>
        <Image src={require(`../../${imageUrl}`)} alt={title} width="270px" />
      </Link>
      <BuyNowDescription>
        <BuyNowLink to={`OSF-Theme/${title}`}>{title}</BuyNowLink>
        <BuyNowWrapper>
          <BuyNowPrice to={`OSF-Theme/${title}`}>$ {price}</BuyNowPrice>
          <BuyNowButton type="button">Buy now</BuyNowButton>
        </BuyNowWrapper>
      </BuyNowDescription>
    </BasicCard>
  );
};

export default BuyNowTile;
