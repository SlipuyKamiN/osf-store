import { useProducts } from 'context/ProductsContext';
import {
  AddToCart,
  ColorSelect,
  Description,
  ProductInfo,
  ProductPrice,
  SelectWrapper,
  ShareIconsWrapper,
  ShowMoreButton,
} from './ProductData.styled';
import { useState } from 'react';
import SocialIconsList from 'components/Global/Footer/SocialIconsList';
import ItemCounter from 'components/Global/ItemCounter';

const ProductData = ({ item }) => {
  const { reducer } = useProducts();
  const [selectedColor, setSelectedColor] = useState('#999999');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [limitText, setLimitText] = useState(false);

  const showLimitedText = () => {
    if (limitText) return item.description;

    return item.description.substring(0, 100) + '...';
  };

  const handleAddToCart = () => {
    reducer('cart/add', {
      ...item,
      orderQuantity,
    });
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
      <ItemCounter
        orderQuantity={orderQuantity}
        setOrderQuantity={setOrderQuantity}
      />
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
