import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const CardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 100px;

  text-align: center;
  color: ${colors.fontGray};
  background-color: ${colors.primaryWhite};
`;

export const CardTitle = styled.h4``;

export const CardPrice = styled.p`
  color: ${colors.priceColor};
`;
