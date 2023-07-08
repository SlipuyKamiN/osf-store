import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const FeaturedSection = styled.section`
  padding-top: 46px;
  padding-bottom: 64px;

  color: ${colors.primaryWhite};
  background-color: ${colors.primaryBg};
  text-align: center;
`;
export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 23px;
`;

export const SectionSubTitle = styled.p`
  font-size: 16px;
  margin-bottom: 26px;
`;

export const SwiperControls = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  width: 530px;

  margin: 0 auto;
  margin-bottom: 24px;

  font-size: 23px;
  font-weight: 600;

  color: ${colors.primaryWhite};

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: ${colors.primaryWhite};
    flex-grow: 1;
    height: 3px;
  }
`;
