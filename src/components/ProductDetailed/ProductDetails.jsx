import ImageGallery from 'react-image-gallery';
import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import { useLocation, useParams } from 'react-router-dom';
import {
  AddToCart,
  ColorSelect,
  CounterButton,
  CounterInput,
  Description,
  ItemCounterWrapper,
  ProductDetailsSection,
  ProductInfo,
  ProductInfoWrapper,
  ProductPrice,
  ProductTitle,
  SelectWrapper,
  ShareIconsWrapper,
  ShowMoreButton,
} from './ProductDetails.styled';
import { productDetailsImages } from 'data/productDetails';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useState } from 'react';
import SocialIconsList from 'components/Global/Footer/SocialIconsList';
import { useProducts } from 'context/ProductsContext';
import ProductTabs from './ProductTabs';

const ProductDetails = () => {
  const { allProducts, reducer } = useProducts();
  const { productId } = useParams();
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 768;
  const [selectedColor, setSelectedColor] = useState('#999999');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [limitText, setLimitText] = useState(false);
  const item = allProducts.find(({ id }) => id === productId);

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
    <ProductDetailsSection>
      <ProductTitle>{item.title}</ProductTitle>
      <ProductInfoWrapper>
        <ImageGallery
          additionalClass="product-details"
          items={productDetailsImages}
          thumbnailPosition={isMobileScreen ? 'bottom' : 'right'}
          showThumbnails={true}
          showPlayButton={false}
          showNav={false}
          showBullets={isMobileScreen}
        />
        <ProductInfo>
          <ProductPrice>${item.price}</ProductPrice>
          <SelectWrapper
            className="icon-caret-down"
            selectedColor={selectedColor}
          >
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
      </ProductInfoWrapper>
      <ProductTabs />
    </ProductDetailsSection>
  );
};

export default ProductDetails;
