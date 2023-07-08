const {
  CardWrapper,
  DetailsWrapper,
  CardTitle,
  CardPrice,
} = require('./MobileItemCard.styled');

const MobileItemCard = ({ title, price }) => {
  return (
    <CardWrapper>
      <DetailsWrapper>
        <CardTitle>{title}</CardTitle>
        <CardPrice>$ {price}</CardPrice>
      </DetailsWrapper>
    </CardWrapper>
  );
};

export default MobileItemCard;
