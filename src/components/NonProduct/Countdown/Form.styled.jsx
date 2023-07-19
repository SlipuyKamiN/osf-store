import styled from '@emotion/styled';
import {
  CouponButton,
  CouponInput,
} from 'components/ShoppingCart/OrderSummary.styled';
import { colors } from 'styles/common/vars';

export const CounterForm = styled.form`
  position: relative;
  max-width: 470px;
  margin: 0 auto;

  text-align: center;

  @media screen and (min-width: 1280px) {
    max-width: none;
    width: 470px;
  }
`;

export const Input = styled(CouponInput)`
  width: 100%;
  font-size: 14px;
  text-transform: none;

  @media screen and (min-width: 1280px) {
    width: 100%;
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

  background-color: ${colors.primaryWhite};
`;
