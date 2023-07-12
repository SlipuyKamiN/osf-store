import styled from '@emotion/styled';
import { LoadMoreButton } from 'components/CategoryLanding/CategoryItemsList.styled';
import { Select } from 'components/CategoryLanding/Filters.styled';
import { colors } from 'styles/common/vars';

export const ProductDetailedMain = styled.main`
  background-color: ${colors.desert};
`;

export const ProductDetailsSection = styled.section`
  padding: 26px 14px;
`;

export const ProductTitle = styled.h1`
  margin-bottom: 64px;

  font-size: 31px;
  font-weight: 900;
  text-align: center;

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 49px;
  }
`;

export const ProductPrice = styled.h2`
  font-size: 31px;
  margin-bottom: 28px;
`;

export const ProductInfoWrapper = styled.div`
  background-color: ${colors.primaryWhite};
  padding-bottom: 24px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const ProductInfo = styled.section`
  padding: 0 11px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 1;

  &::before {
    position: absolute;
    right: 18px;
    top: 10px;
    opacity: 0.5;
    color: ${colors.fontGray};
  }

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: ${props => props.selectedColor};
  }
`;

export const ColorSelect = styled(Select)`
  width: 155px;
  height: 39px;
  padding-left: 43px;
  margin-bottom: 25px;
  border-color: ${colors.desert};
`;

export const ItemCounterWrapper = styled.div`
  width: 109px;
  height: 39px;
  padding: 0 20px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;

  border: 2px solid ${colors.desert};
`;

export const CounterInput = styled.input`
  width: 100%;
  padding: 4px 5px 0;
  background-color: transparent;
  border: none;
  text-align: center;
`;

export const CounterButton = styled.button`
  padding: 0;

  font-size: 18px;
  font-weight: 900;
  color: ${colors.gray};
  border: none;
  background-color: transparent;
`;

export const AddToCart = styled(LoadMoreButton)`
  border-color: ${colors.desert};
  margin-bottom: 34px;
`;

export const ShowMoreButton = styled.button`
  color: ${colors.accentGreen};
  background-color: transparent;
  border: none;
  padding: 0;
  margin-bottom: 34px;

  &:hover,
  &:focus {
    color: ${colors.accentBlue};
  }
`;

export const Description = styled.p`
  margin-bottom: 12px;
`;

export const ShareIconsWrapper = styled.div`
  display: flex;
  gap: 32px;

  ul {
    margin: 0;
  }
`;

export const ScrollToTopButton = styled(LoadMoreButton)`
  display: block;
  margin: 0 auto;
`;
