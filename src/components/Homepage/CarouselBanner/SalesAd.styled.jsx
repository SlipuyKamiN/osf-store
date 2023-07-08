import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const SalesCard = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 270px;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 42px;
`;

export const ImageTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.primaryWhite};
`;

export const Percentage = styled.h2`
  font-size: 96px;
  font-weight: 900;
  margin-bottom: 60px;
`;

export const SaleDescription = styled.p`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1.2;
`;

export const CardTitle = styled.h3`
  margin-bottom: 17px;
  font-size: 18px;
`;

export const CardDescription = styled.p`
  font-size: 13px;
  margin-bottom: 31px;
`;

export const CardFollowLink = styled.a`
  display: flex;
  gap: 19px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 150px;
  height: 39px;
  border-radius: 25px;

  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;

  border: 2px solid ${colors.accentBlue};
  color: ${colors.accentBlue};

  transition: color ${transition.duration}, border-color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentGreen};
    border-color: ${colors.accentGreen};
  }
`;
