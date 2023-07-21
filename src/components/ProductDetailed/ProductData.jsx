import { useProducts } from 'context/ProductsContext';
import {
  AddToCart,
  AddToCartWrapper,
  ButtonsList,
  ColorSelect,
  Description,
  PrintButton,
  ProductInfo,
  ProductPrice,
  SelectWrapper,
  ShareIconsWrapper,
  ShowMoreButton,
} from './ProductData.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SocialIconsList from 'components/Global/Footer/SocialIconsList';
import ItemCounter from 'components/Global/ItemCounter';
import ReactToPrint from 'react-to-print';
import { notification } from 'components/Global/notification';

const ProductData = ({ item, componentToPrint }) => {
  const { reducer } = useProducts();
  const [selectedColor, setSelectedColor] = useState('#999999');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [limitText, setLimitText] = useState(false);

  const showLimitedText = () => {
    if (limitText) return item.description;

    return item.description.substring(0, 100) + '...';
  };

  const handleAddToCart = () => {
    const response = reducer(`cart/add`, { ...item, orderQuantity });

    if (response) return notification(response);

    notification(`Item "${item.title}" has been added to your cart`, 'success');
  };

  return (
    <ProductInfo>
      <ProductPrice>${item.price}</ProductPrice>
      <SelectWrapper className="icon-caret-down" selectedColor={selectedColor}>
        <ColorSelect
          onChange={e => {
            setSelectedColor(e.target.value);
          }}
        >
          <option value="#999999">Dark Gray</option>
          <option value="#43C0CF">Sky Blue</option>
        </ColorSelect>
      </SelectWrapper>
      <AddToCartWrapper>
        <ItemCounter
          orderQuantity={orderQuantity}
          setOrderQuantity={setOrderQuantity}
        />
        <AddToCart type="button" onClick={handleAddToCart}>
          Add to cart
        </AddToCart>
      </AddToCartWrapper>
      <Description>{showLimitedText()}</Description>
      <ButtonsList>
        <li>
          <ShowMoreButton
            type="button"
            onClick={() => {
              setLimitText(!limitText);
            }}
          >
            {limitText ? 'Read less' : 'Read more'}
          </ShowMoreButton>
        </li>
        <li>
          <ReactToPrint
            trigger={() => (
              <PrintButton className="icon-printer" type="button" />
            )}
            content={() => componentToPrint.current}
          />
        </li>
      </ButtonsList>
      <ShareIconsWrapper>
        <span>Share</span>
        <SocialIconsList />
      </ShareIconsWrapper>
    </ProductInfo>
  );
};

export default ProductData;

ProductData.propTypes = {
  item: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  componentToPrint: PropTypes.objectOf({ current: PropTypes.element }),
};
