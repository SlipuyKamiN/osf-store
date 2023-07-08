import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const Benefit = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  justify-content: space-between;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 60px;
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
    align-items: center;

    &:nth-of-type(n) {
      margin-bottom: 0;
      flex-direction: row;
    }

    div {
      align-self: flex-start;
    }
  }
`;

export const BenefitTitle = styled.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.primaryWhite};
`;

export const BenefitDescription = styled.p`
  font-size: 14px;
  color: ${colors.benefitsText};

  @media screen and (min-width: 1280px) {
    width: 230px;
  }
`;
