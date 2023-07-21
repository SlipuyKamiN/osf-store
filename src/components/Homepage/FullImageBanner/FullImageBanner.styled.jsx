import styled from '@emotion/styled';
import bgImagePath from 'images/banner.jpg';
import { colors } from 'styles/common/vars';

export const BannerSection = styled.section`
  width: 100%;
  height: 185px;
  padding-top: 30px;
  padding-bottom: 30px;

  background-image: url(${bgImagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  text-align: center;
  color: ${colors.primaryWhite};

  @media screen and (min-width: 1280px) {
    padding-top: 170px;
    height: 445px;
  }
`;

export const BannerTitle = styled.h2`
  margin-bottom: 38px;

  font-size: 29px;
  font-weight: 900;

  @media screen and (min-width: 1280px) {
    font-size: 47px;
  }
`;

export const BannerDescription = styled.p`
  margin: 0 auto;
  max-width: 334px;
  font-size: 14px;
`;
