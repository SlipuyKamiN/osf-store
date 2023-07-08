import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BannerSection = styled.section`
  display: flex;
  gap: 30px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &.items-left {
    text-align: left;
    align-items: flex-start;
  }

  &.items-center {
    text-align: center;
    align-items: center;
  }

  &.items-right {
    text-align: right;
    align-items: flex-end;
  }
`;

export const Title = styled.h1`
  max-width: 559px;

  font-size: 30px;
  letter-spacing: -2px;

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  max-width: 336px;
  font-size: 14px;
`;

export const ViewMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 130px;
  height: 39px;
  border-radius: 20px;
  opacity: 0.5;
  color: #ffffff;
  border: 2px solid #ffffff;
  transition: opacity 250ms linear;

  @media screen and (min-width: 1280px) {
    width: 150px;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
