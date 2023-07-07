import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'styles/vars';

export const MobileHeaderWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const ToggleNavigationBtn = styled.button`
  background-color: transparent;
  border: none;
  justify-self: flex-start;
  width: 20px;
  height: 20px;
  font-size: 20px;
  text-align: center;
  padding: 0;
`;

export const PageLogoWrapper = styled.a`
  transform: translateX(50%);
  width: 46px;
  height: 46px;
`;

export const MobileNavigationWrapper = styled.div`
  position: absolute;

  top: 60px;
  left: -0;
  width: 100vw;
  padding: 16px;

  font-size: 14px;
  background-color: ${colors.primaryBg};
  color: ${colors.primaryWhite};

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

  img {
    margin: 0 auto;
  }
`;

export const NavigationList = styled.ul`
  flex-shrink: 0;
  margin-bottom: 200px;
  & > li:not(:last-child) {
    margin-bottom: 34px;
  }
`;

export const ServicesList = styled.ul`
  padding-left: 10px;
  margin-top: 10px;
  width: 50%;

  & > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SubList = styled.ul`
  padding-left: 10px;
  margin-top: 10px;

  & > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NavigationLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 900;
`;

export const ServiceLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
`;
