import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/vars';

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
  padding-bottom: 9px;
  gap: 31px;

  @media screen and (max-width: 1280px) {
    display: none;
  }

  li {
    position: relative;
  }
`;

export const Select = styled.select`
  width: 54px;
  border: none;
  cursor: pointer;
  color: ${colors.fontGray};
  opacity: 0.5;
  font-size: 14px;
`;

export const CaretDownIcon = styled.span`
  position: absolute;
  right: 4px;
  color: #d1d5d8;
`;

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 62px;
  @media screen and (max-width: 1280px) {
    display: none;
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
