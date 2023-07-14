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
