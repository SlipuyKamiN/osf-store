import { BasicCard, BasicTitle, Image } from './BasicTile.styled';
import { AddButton, Price, PricedDescription } from './PricedTile.styled';

const PricedTile = ({ item: { imageUrl, title, price } }) => {
  return (
    <BasicCard>
      <Image src={imageUrl} alt={title} width="270px" />
      <PricedDescription>
        <BasicTitle>{title}</BasicTitle>
        <Price>$ {price}</Price>
        <ul className="overlay">
          <li>
            <AddButton type="button" className="icon-plus"></AddButton>
          </li>
          <li>
            <AddButton type="button" className="icon-heart-red"></AddButton>
          </li>
        </ul>
      </PricedDescription>
    </BasicCard>
  );
};

export default PricedTile;
