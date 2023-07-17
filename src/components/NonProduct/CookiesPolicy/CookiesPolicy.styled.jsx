import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';
import { ProceedButton } from 'components/ShoppingCart/OrderSummary.styled';

export const CookieWrapper = styled.div`
  position: absolute;
  bottom: 89px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 80dvw;

  padding: 24px;

  background-color: ${colors.primaryWhite};
  border-radius: 6px;

  @media screen and (min-width: 1280px) {
    width: 1157px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  padding: 0;

  color: ${colors.primaryBlack};
  background-color: transparent;
  border: none;
  font-size: 20px;
`;

export const PolicyTitle = styled.h2`
  margin-bottom: 24px;

  color: ${colors.accentGreen};

  font-size: 16px;
  font-weight: 900;
`;

export const PolicyDescription = styled.p`
  max-width: 828px;

  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;

export const PolicyLink = styled.a`
  color: ${colors.accentGreen};

  &:hover,
  &:focus {
    color: ${colors.accentBlue};
  }
`;

export const AcceptButton = styled(ProceedButton)`
  max-width: 150px;

  @media screen and (min-width: 1280px) {
    width: 150px;
  }
`;
