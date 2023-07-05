import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/vars';

export const Nav = styled.nav`
  margin-left: 179px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavigationListItem = styled.li`
  height: 100%;
  padding: 19px 0;
`;

export const NavigationLink = styled(Link)`
  font-size: 14px;
  padding: 19px 13px;
  text-transform: uppercase;
  color: ${colors.fontGray};
  transition: background-color ${transition.duration},
    color ${transition.duration}, border-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.primaryBg};
    border-bottom: 3px solid ${colors.accentGreen};
  }
`;

export const ServicesWrapper = styled.div`
  position: absolute;
  top: 78px;
  left: -55px;
  width: 1280px;
  display: flex;
  background-color: ${colors.primaryBg};
  color: ${colors.primaryWhite};
`;
