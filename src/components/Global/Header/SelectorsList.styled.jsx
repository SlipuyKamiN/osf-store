import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const SelectList = styled.ul`
  display: none;
  align-items: center;
  margin-left: 46px;
  padding-bottom: 9px;
  gap: 31px;

  @media screen and (min-width: 1280px) {
    display: flex;
  }

  li {
    position: relative;
  }
`;

export const Select = styled.select`
  width: 54px;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  font-size: 14px;

  color: ${colors.fontGray};
  background-color: transparent;
`;

export const CaretDownIcon = styled.span`
  position: absolute;
  pointer-events: none;
  right: 4px;
  color: #d1d5d8;
`;
