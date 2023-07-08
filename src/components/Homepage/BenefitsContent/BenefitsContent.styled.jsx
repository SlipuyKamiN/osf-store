import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const BenefitsSection = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${colors.fontGray};

  @media screen and (min-width: 1280px) {
    padding-top: 49px;
    padding-bottom: 62px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }
`;
