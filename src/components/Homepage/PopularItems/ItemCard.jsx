const {
  CardWrapper,
  DetailsWrapper,
  CardTitle,
  CardPrice,
} = require('./ItemCard.styled');

const ItemCard = ({ title, price }) => {
  return (
    <CardWrapper>
      <DetailsWrapper>
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
      </DetailsWrapper>
    </CardWrapper>
  );
};

export default ItemCard;
