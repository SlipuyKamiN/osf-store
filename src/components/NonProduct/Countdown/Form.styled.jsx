import styled from '@emotion/styled';
import {
  CouponButton,
  CouponInput,
} from 'components/ShoppingCart/OrderSummary.styled';

export const CounterForm = styled.form`
  position: relative;
  width: 470px;
  margin: 0 auto;
`;

export const Input = styled(CouponInput)`
  width: 100%;
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    width: 100%;
  }

  &::placeholder {
    text-transform: none;
  }
`;

export const SubmitButton = styled(CouponButton)`
  position: absolute;
  padding: 0;
  right: 8px;
  top: 6px;

  width: 26px;
  height: 26px;
  font-size: 16px;
  font-weight: 900;
`;
