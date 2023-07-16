import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const ShoppingCartMain = styled.main`
  background-color: ${colors.desert};
`;

export const CartItemsSection = styled.section`
  width: 100%;
  padding: 45px;
  margin-bottom: 5px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  background-color: ${colors.primaryWhite};

  @media screen and (min-width: 1280px) {
    padding: 85px;
  }
`;

export const CartItemsList = styled.ul``;

export const EmptyListTitle = styled.h2`
  position: relative;
  text-align: center;
  font-size: 32px;

  span,
  a {
    font-family: 'Lato';
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }

  &::before {
    position: absolute;
    top: -25px;
    left: -25px;
    opacity: 0.1;
    font-size: 180px;

    @media screen and (min-width: 1280px) {
      top: -27px;
      left: 20px;
      font-size: 260px;
    }
  }
`;
