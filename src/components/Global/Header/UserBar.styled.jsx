import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/vars';

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 62px;
  @media screen and (max-width: 1280px) {
    display: none;
  }

  &.mobile {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    display: none;
    background-color: ${colors.primaryBg};
    @media screen and (max-width: 1280px) {
      display: flex;
      justify-content: center;
    }
  }

  &.mobile {
    a {
      color: ${colors.gray};
    }

    a:hover,
    a:focus {
      color: ${colors.fontGray};
      background-color: ${colors.primaryWhite};
      border-bottom: 3px solid ${colors.accentGreen};
    }
  }
`;

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
    color: ${colors.primaryWhite};
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
