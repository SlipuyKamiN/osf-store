import { Link } from 'react-router-dom';
import { BasicCard, Image } from './BasicTile.styled';
import {
  BuyNowButton,
  BuyNowDescription,
  BuyNowLink,
  BuyNowPrice,
  BuyNowWrapper,
} from './BuyNowTile.styled';
import PropTypes from 'prop-types';
import { useProducts } from 'context/ProductsContext';
import { notification } from 'components/Global/notification';

const BuyNowTile = ({ item: { imageUrl, id, title, price }, item }) => {
  const { reducer } = useProducts();

  const handleAddItem = () => {
    const response = reducer(`cart/add`, { ...item, orderQuantity: 1 });

    if (response) return notification(response);

    notification(`Item "${item.title}" has been added to your cart`, 'success');
  };

  return (
    <BasicCard>
      <Link to={`product-detailed/${id}/${title}/description`}>
        <Image src={imageUrl} alt={title} width="270px" />
      </Link>
      <BuyNowDescription>
        <BuyNowLink to={`product-detailed/${id}/${title}/description`}>
          {title}
        </BuyNowLink>
        <BuyNowWrapper>
          <BuyNowPrice to={`product-detailed/${id}/${title}/description`}>
            $ {price}
          </BuyNowPrice>
          <BuyNowButton type="button" onClick={handleAddItem}>
            Buy now
          </BuyNowButton>
        </BuyNowWrapper>
      </BuyNowDescription>
    </BasicCard>
  );
};

export default BuyNowTile;

BuyNowTile.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    buyNow: PropTypes.bool.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    comment: PropTypes.object,
  }).isRequired,
};
