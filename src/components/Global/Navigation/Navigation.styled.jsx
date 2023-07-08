import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

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
  padding: 19px 0 25px;
`;

export const NavigationLink = styled(Link)`
  font-size: 14px;
  padding: 19px 13px 25px;
  text-transform: uppercase;
  border-bottom: 3px solid transparent;
  color: ${colors.fontGray};
  transition: background-color ${transition.duration},
    color ${transition.duration}, border-color ${transition.duration};

  &:hover,
  &:focus,
  &.active {
    color: ${colors.primaryWhite};
    background-color: ${colors.primaryBg};
    border-bottom: 3px solid ${colors.accentGreen};
  }
`;

export const ServicesWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 78px;
  left: 0;
  width: 1280px;
  height: 383px;

  padding: 60px 64px 52px;

  background-color: ${colors.primaryBg};
  color: ${colors.primaryWhite};
`;

export const CategoriesListWrapper = styled.div`
  flex-shrink: 0;
  width: 551px;
`;

export const ServiceTitle = styled.h3`
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 229px;
  row-gap: 14px;
`;

export const Img = styled.img`
  border-radius: 6px;
`;
