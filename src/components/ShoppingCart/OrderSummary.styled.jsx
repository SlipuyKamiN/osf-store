import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const SummarySection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 45px;

  font-size: 14px;
  margin-bottom: 5px;

  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${colors.primaryWhite};

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 71px 100px;
  }
`;

export const CouponForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;

  margin-bottom: 44px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const CouponInput = styled.input`
  width: 100%;
  height: 39px;

  padding: 10px 20px;

  text-transform: uppercase;

  border-radius: 20px;
  border: 2px solid ${colors.desert};

  @media screen and (min-width: 1280px) {
    width: 219px;
  }
`;

export const Button = styled.button`
  padding: 9px;

  text-transform: uppercase;

  border-radius: 20px;
  border: 2px solid ${colors.accentGreen};

  font-size: 14px;
  color: ${colors.accentGreen};
  background-color: transparent;

  transition: color ${transition.duration},
    background-color ${transition.duration}, border-color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentBlue};
    border-color: ${colors.accentBlue};
  }
`;

export const CouponButton = styled(Button)`
  width: 114px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  margin-bottom: 44px;
`;

export const UpdateButton = styled(Button)`
  width: 163px;
`;

export const ProceedButton = styled(Button)`
  width: 100%;

  color: ${colors.primaryWhite};
  background-color: ${colors.accentGreen};

  &:hover,
  &:focus {
    color: ${colors.primaryWhite};
    background-color: ${colors.accentBlue};
  }

  @media screen and (min-width: 1280px) {
    width: 264px;
  }
`;

export const OrderSubtotalTable = styled.table`
  width: 100%;

  text-transform: uppercase;

  margin-bottom: 37px;

  td {
    padding: 0;
  }

  td:first-of-type {
    width: 50%;
    @media screen and (min-width: 1280px) {
      width: 231px;
    }
  }

  td:last-of-type {
    font-weight: 600;
  }
`;

export const DeliveryForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;

  margin-bottom: 59px;
`;

export const FormTitle = styled.h4`
  text-transform: uppercase;
`;

export const RadioButtonWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const RadioButton = styled.input`
  margin-right: 13px;
  accent-color: ${colors.accentGreen};
  padding: 2px;
`;

export const DeliveryPriceWrapper = styled.span`
  font-weight: 900;
`;

export const OrderTotalTable = styled.table`
  width: 100%;
  font-weight: 900;

  td {
    padding: 0;
  }

  td:first-of-type {
    width: 50%;
    @media screen and (min-width: 1280px) {
      width: 231px;
    }
  }

  td:last-of-type {
    font-size: 28px;
    font-weight: 600;

    @media screen and (min-width: 1280px) {
      font-size: 48px;
    }
  }
`;
