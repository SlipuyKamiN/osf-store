import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const FilterSection = styled.section`
  padding: 0 13px;
  width: 100%;
  text-align: center;
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    padding: 0 54px;
  }
`;

export const ToggleFilterButton = styled.button`
  margin: 0 auto 21px;

  border: none;
  background-color: transparent;
  color: ${colors.accentGreen};
`;

export const FilterForm = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 15px;
  background-color: ${colors.primaryWhite};
  margin-bottom: 21px;

  & > div {
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;

    & > div {
      margin-bottom: 0;
    }
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 1;

  @media screen and (min-width: 1280px) {
    width: 263px;
  }

  &:not(:last-child) {
    margin-bottom: 26px;

    @media screen and (min-width: 1280px) {
      margin-bottom: 28px;
    }
  }

  &::before {
    position: absolute;
    color: ${colors.fontGray};
    opacity: 0.5;
    right: 18px;
  }

  & label {
    font-family: 'Lato';
  }
`;

export const Select = styled.select`
  width: 200px;
  height: 35px;
  padding: 5px 21px;

  font-size: 14px;
  cursor: pointer;

  border: 2px solid RGBA(69, 65, 62, 0.5);
  border-radius: 20px;
  color: ${colors.fontGray};
  appearance: none;
`;

export const ColorPickerButton = styled.input`
  appearance: none;
  background-color: #fff;
  color: ${props => props.value};
  background-color: ${props => props.value};
  width: 17px;
  height: 17px;
  border-radius: 50%;

  &:checked {
    border: 3px solid ${colors.fontGray};
  }

  &:not(:last-child) {
    margin-right: 7px;
  }
`;

export const ResultCounter = styled.p`
  text-align: center;
`;
