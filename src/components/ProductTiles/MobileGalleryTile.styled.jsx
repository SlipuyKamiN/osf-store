import styled from '@emotion/styled';
import { BasicCard } from './BasicTile.styled';

export const MobileCard = styled(BasicCard)`
  width: 100%;
  height: 100%;

  &::marker {
    display: none;
  }
`;
