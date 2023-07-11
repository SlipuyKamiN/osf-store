import styled from '@emotion/styled';
import { SectionTitle } from 'components/Homepage/PopularItems/PopularItems.styled';
import { colors } from 'styles/common/vars';

export const ServicesSection = styled.section`
  padding-top: 24px;
  padding-bottom: 50px;
  background-color: ${colors.servicesBg};

  @media screen and (min-width: 1280px) {
    padding-top: 55px;
    padding-bottom: 75px;
  }
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

export const ResultCounter = styled.p`
  text-align: center;
  margin-bottom: 21px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 31px;
  }
`;
