import { BasicDescription, BasicTitle, Image } from './BasicTile.styled';
import { MobileCard } from './MobileGalleryTile.styled';
import { Price } from './PricedTile.styled';

const MobileGalleryTile = ({ item: { imageUrl, title, price } }) => {
  return (
    <MobileCard>
      <Image src={require(`../../${imageUrl}`)} alt={title} width="270px" />
      <BasicDescription>
        <BasicTitle>{title}</BasicTitle>
        <Price>$ {price}</Price>
      </BasicDescription>
    </MobileCard>
  );
};

export default MobileGalleryTile;
