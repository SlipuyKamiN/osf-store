import styled from '@emotion/styled';
import { colors } from 'styles/vars';
import { SectionTitle } from '../PopularItems/PopularItems.styled';

export const BenefitsSection = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${colors.fontGray};

  @media screen and (min-width: 1280px) {
    padding-top: 49px;
    padding-bottom: 62px;
  }
`;

export const HiddenTitle = styled(SectionTitle)`
  position: absolute;
  white-space: nowrap;
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;
`;

export const List = styled.ul`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }
`;
