import styled from '@emotion/styled';
import { LoadMoreButton } from 'components/CategoryLanding/CategoryItemsList.styled';
import { Select } from 'components/CategoryLanding/Filters.styled';
import { colors, transition } from 'styles/common/vars';

export const ProductPrice = styled.h2`
  font-size: 31px;
  font-weight: 900;
  margin-bottom: 28px;

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const ProductInfo = styled.section`
  padding: 0 11px 27px;

  @media screen and (min-width: 1280px) {
    padding-top: 47px;
    width: 347px;
  }
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

export const AddToCartWrapper = styled.div`
  margin-bottom: 34px;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 21px;
    margin-bottom: 50px;

    button {
      margin: 0;
    }
  }
`;

export const AddToCart = styled(LoadMoreButton)`
  border-color: ${colors.desert};
  margin: 0;
`;

export const ButtonsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 34px;
`;

export const ShowMoreButton = styled.button`
  color: ${colors.accentGreen};
  background-color: transparent;
  border: none;
  padding: 0;

  font-size: 16px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const PrintButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 24px;

  color: ${colors.accentGreen};

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentBlue};
  }

  @media print {
    display: none;
  }
`;

export const Description = styled.p`
  margin-bottom: 12px;
  line-height: 1.5;
`;

export const ShareIconsWrapper = styled.div`
  display: flex;
  gap: 32px;

  font-size: 14px;

  span {
    opacity: 0.5;
  }

  ul {
    margin: 0;
  }
`;
