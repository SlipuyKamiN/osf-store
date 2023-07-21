import styled from '@emotion/styled';
import { BasicCard } from './BasicTile.styled';
import { Price } from './PricedTile.styled';
import { colors } from 'styles/common/vars';

export const MobileCard = styled(BasicCard)`
  width: 100%;
  height: 100%;

  &::marker {
    display: none;
  }
`;

export const MobileItemPrice = styled(Price)`
  color: ${colors.priceGrayColor};
`;
