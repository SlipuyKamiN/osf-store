import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const PageHeader = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: ${colors.primaryWhite};
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1280px) {
    height: 78px;
    padding-top: 14px;
  }
`;

export const PageLogoWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const UpperLogoText = styled.p`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 4.05px;
  color: ${colors.primaryBg};
`;

export const LowerLogoText = styled.p`
  font-size: 18px;
  color: ${colors.accentGreen};
`;

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 62px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
