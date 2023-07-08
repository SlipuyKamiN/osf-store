import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';
import { BasicDescription } from './BasicTile.styled';

export const BuyNowDescription = styled(BasicDescription)`
  padding-bottom: 8px;
`;

export const BuyNowLink = styled(Link)`
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
`;

export const BuyNowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 201px;
  height: 39px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

export const BuyNowPrice = styled.p`
  width: 50%;
  color: ${colors.accentGreen};
`;

export const BuyNowButton = styled.button`
  height: 100%;
  width: 50%;
  text-align: center;
  background-color: transparent;
  border: none;
  border-left: 2px solid rgba(0, 0, 0, 0.1);

  text-transform: uppercase;
  transition: color ${transition.duration},
    background-color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryWhite};
    background-color: ${colors.accentGreen};
  }
`;
