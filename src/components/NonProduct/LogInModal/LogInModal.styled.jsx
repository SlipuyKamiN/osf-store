import styled from '@emotion/styled';
import { ProceedButton } from 'components/ShoppingCart/OrderSummary.styled';
import { colors, transition } from 'styles/common/vars';
import { GoHomeLink } from '../ErrorSection.styled';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;

  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
`;

export const ModalForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 503px;

  padding: 51px;

  background-color: ${colors.primaryWhite};
  border-radius: 6px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 503px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 53px;

  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 23px;

  &:last-child {
    margin-bottom: 54px;
  }
`;

export const ForgotPasswordLink = styled(GoHomeLink)`
  margin: 0;
  font-size: 12px;
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 18px;

  font-size: 14px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;

  border: 2px solid #d7d7d7;
  border-radius: 20px;
`;

export const ErrMessage = styled.span`
  max-width: 100%;
  font-size: 14px;
  color: red;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 41px;
  right: 20px;

  border: none;

  font-size: 20px;

  transition: color ${transition.duration};
  color: ${props => (props.active ? colors.accentBlue : '#c2c2c2')};
  background-color: transparent;
`;

export const SubmitButton = styled(ProceedButton)`
  width: 184px;
  margin-bottom: 22px;
`;

export const RegisterLink = styled(GoHomeLink)`
  margin: 0;
  font-size: 12px;
`;
