import CommentItem from './CommentItem';
import {
  AddButton,
  BuyNowButton,
  BuyNowLink,
  BuyNowPrice,
  BuyNowWrapper,
  Image,
  ItemCard,
  ItemDescExtended,
  ItemDescription,
} from './ListItem.styled';

const ListItem = ({
  item: { original, title, price, buyNow = false, comment = null },
}) => {
  if (comment) {
    return <CommentItem original={original} comment={comment} />;
  }

  return (
    <ItemCard>
      <Image src={original} alt={title} width="270px" />
      {buyNow ? (
        <ItemDescription>
          <BuyNowLink to="product-detailed">{title}</BuyNowLink>
          <BuyNowWrapper>
            <BuyNowPrice>$ {price}</BuyNowPrice>
            <BuyNowButton>Buy now</BuyNowButton>
          </BuyNowWrapper>
        </ItemDescription>
      ) : (
        <ItemDescExtended>
          <h4>{title}</h4>
          <p>$ {price}</p>
          <ul className="overlay">
            <li>
              <AddButton type="button" className="icon-plus"></AddButton>
            </li>
            <li>
              <AddButton type="button" className="icon-heart-red"></AddButton>
            </li>
          </ul>
        </ItemDescExtended>
      )}
    </ItemCard>
  );
};

export default ListItem;
