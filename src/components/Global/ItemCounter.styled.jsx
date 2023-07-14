import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const ItemCounterWrapper = styled.div`
  width: 109px;
  height: 39px;
  padding: 0 10px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;

  border: 2px solid ${colors.desert};

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const CounterInput = styled.input`
  width: 100%;
  padding: 4px 5px 0;
  background-color: transparent;
  border: none;
  text-align: center;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const CounterButton = styled.button`
  padding: 0 10px;

  font-size: 18px;
  font-weight: 900;
  color: ${colors.gray};
  border: none;
  background-color: transparent;
`;
