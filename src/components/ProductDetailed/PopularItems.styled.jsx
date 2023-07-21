import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const PopularItemsSection = styled.section`
  padding-top: 20px;
  padding-bottom: 72px;
  background-color: ${colors.productDetailedBg};

  @media screen and (min-width: 1280px) {
    padding-top: 26px;
    padding-bottom: 59px;
  }
`;

export const SectionTitle = styled.h2`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;

  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: ${colors.fontGray};
    opacity: 0.1;
    flex-grow: 1;
    height: 3px;
  }
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 27px;
`;
