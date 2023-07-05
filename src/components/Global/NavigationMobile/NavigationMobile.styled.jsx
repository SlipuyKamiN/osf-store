import styled from '@emotion/styled';
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
  justify-self: flex-start;
  width: 27px;
  height: 28px;
`;

export const PageLogoWrapper = styled.a`
  transform: translateX(50%);
  width: 46px;
  height: 46px;
`;

export const NavigationListWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: -16px;
  width: 100vw;
  padding: 16px;
  background-color: ${colors.primaryBg};
  color: ${colors.primaryWhite};

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
