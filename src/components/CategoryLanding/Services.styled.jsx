import styled from '@emotion/styled';
import { SectionTitle } from 'components/Homepage/PopularItems/PopularItems.styled';
import { colors } from 'styles/common/vars';

export const ServicesMain = styled.main`
  background-color: ${colors.servicesBg};
`;

export const ServicesTitle = styled(SectionTitle)`
  gap: 25px;
  margin: 0 auto;
  font-size: 31px;
  color: ${colors.fontGray};
  margin-bottom: 41px;

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 48px;
  }

  &::before,
  &::after {
    opacity: 0.5;
  }
`;
