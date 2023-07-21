import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const Benefit = styled.li`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
  padding-left: 40px;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 84px;
  }

  &:nth-of-type(2n) {
    padding-left: 0;
    padding-right: 40px;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
    align-items: center;
    padding-left: 0;

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
  margin-bottom: 21px;
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
