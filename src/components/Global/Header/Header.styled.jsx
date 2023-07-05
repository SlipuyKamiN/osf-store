import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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

export const SelectList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 46px;
  gap: 34px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Select = styled.select`
  border: none;
  cursor: pointer;
  color: ${colors.fontGray};
  opacity: 0.5;
  font-size: 14px;
`;

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 33px;
  margin-left: 62px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const IconLink = styled(Link)`
  position: relative;
  display: block;
  font-size: 27px;
`;

export const IconCounter = styled.span`
  position: absolute;
  display: block;
  top: -7px;
  right: -7px;
  width: 17px;
  height: 17px;
  font-size: 12px;
  text-align: center;
  color: ${colors.accentGreen};
  background-color: ${colors.primaryWhite};
  border-radius: 50%;
  border: 2px solid ${colors.accentGreen};
`;
