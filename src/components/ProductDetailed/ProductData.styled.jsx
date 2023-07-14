import styled from '@emotion/styled';
import { LoadMoreButton } from 'components/CategoryLanding/CategoryItemsList.styled';
import { Select } from 'components/CategoryLanding/Filters.styled';
import { colors } from 'styles/common/vars';

export const ProductPrice = styled.h2`
  font-size: 31px;
  margin-bottom: 28px;
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
