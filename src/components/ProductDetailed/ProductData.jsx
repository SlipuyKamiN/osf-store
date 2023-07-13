import { useProducts } from 'context/ProductsContext';
import {
  AddToCart,
  ColorSelect,
  CounterButton,
  CounterInput,
  Description,
  ItemCounterWrapper,
  ProductInfo,
  ProductPrice,
  SelectWrapper,
  ShareIconsWrapper,
  ShowMoreButton,
} from './ProductData.styled';
import { useState } from 'react';
import SocialIconsList from 'components/Global/Footer/SocialIconsList';

const ProductData = ({ item }) => {
  const { reducer } = useProducts();
  const [selectedColor, setSelectedColor] = useState('#999999');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [limitText, setLimitText] = useState(false);

  const handleChangeQuantity = type => {
    setOrderQuantity(prev => {
      if (type === 'decrement') return Number(prev) - 1;

      return Number(prev) + 1;
    });
  };

  const handleInputChange = event => {
    if (Number(event.target.value) <= 0) return;

    setOrderQuantity(Number(event.target.value));
  };

  const showLimitedText = () => {
    if (limitText) return item.description;

    return item.description.substring(0, 100) + '...';
  };

  const handleAddToCart = () => {
    reducer('cart/add', { ...item, orderQuantity });
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
      <ItemCounterWrapper>
        <CounterButton
          type="button"
          disabled={orderQuantity <= 1}
          onClick={() => {
            handleChangeQuantity('decrement');
          }}
        >
          -
        </CounterButton>
        <CounterInput
          type="number"
          name="quantity"
          min={0}
          value={orderQuantity}
          onChange={handleInputChange}
        />
        <CounterButton
          type="button"
          onClick={() => {
            handleChangeQuantity('increment');
          }}
        >
          +
        </CounterButton>
      </ItemCounterWrapper>
      <AddToCart type="button" onClick={handleAddToCart}>
        Add to cart
      </AddToCart>
      <Description>{showLimitedText()}</Description>
      <ShowMoreButton
        type="button"
        onClick={() => {
          setLimitText(!limitText);
        }}
      >
        {limitText ? 'Show less' : 'Show more'}
      </ShowMoreButton>
      <ShareIconsWrapper>
        Share
        <SocialIconsList />
      </ShareIconsWrapper>
    </ProductInfo>
  );
};

export default ProductData;
