import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const FilterSection = styled.section`
  padding: 0;
  width: 100%;
  text-align: center;
`;

export const ToggleFilterButton = styled.button`
  margin: 0 auto 21px;

  border: none;
  background-color: transparent;
  color: ${colors.accentGreen};
`;

export const FilterForm = styled.section`
  width: 100%;
  border-radius: 6px;
  padding: 15px;
  background-color: ${colors.primaryWhite};
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 26px;
  }
`;

export const Select = styled.select`
  width: 200px;
  height: 35px;
  font-size: 14px;
  color: ${colors.fontGray};
  border: 2px solid ${colors.fontGray};
  border-radius: 20px;
  padding: 5px 21px;
`;
