import styled from '@emotion/styled';
import { colors } from 'styles/vars';

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
  pointer-events: none;
  right: 4px;
  color: #d1d5d8;
`;
