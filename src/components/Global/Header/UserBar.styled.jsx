import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/vars';

export const IconLink = styled(Link)`
  position: relative;
  display: block;
  font-size: 24px;
  padding: 15px 12px;
  border-bottom: 3px solid transparent;
  color: ${colors.fontGray};
  transition: background-color ${transition.duration},
    color ${transition.duration}, border-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.primaryBg};
    border-bottom: 3px solid ${colors.accentGreen};
  }
`;

export const IconCounter = styled.span`
  position: absolute;
  display: block;
  top: 7px;
  right: 7px;
  width: 17px;
  height: 17px;
  font-size: 12px;
  text-align: center;
  color: ${colors.accentGreen};
  background-color: ${colors.primaryWhite};
  border-radius: 50%;
  border: 2px solid ${colors.accentGreen};
`;
