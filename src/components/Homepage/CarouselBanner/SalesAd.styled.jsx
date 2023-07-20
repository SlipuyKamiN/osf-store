import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';
import salesImagePath from 'images/sales.png';

export const SalesCard = styled.div`
  display: none;
  width: 270px;
  text-align: center;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  width: 270px;
  height: 335px;
  
  padding: 65px 20px;
  margin-bottom: 38px;
  border-radius: 6px;

  text-align: center;
  color: ${colors.primaryWhite};
  background-image: url(${salesImagePath});
`;

export const Percentage = styled.h2`
  font-size: 96px;
  font-weight: 900;
  margin-bottom: 50px;
`;

export const SaleDescription = styled.p`
  max-width: 190px;
  margin: 0 auto;

  text-transform: uppercase;
  font-size: 26px;
  line-height: 1.2;
`;

export const CardTitle = styled.h3`
  margin-bottom: 17px;
  font-size: 18px;
`;

export const CardDescription = styled.p`
  margin: 0 auto 31px;
  max-width: 195px;
  font-size: 13px;
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
