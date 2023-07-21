import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const ProductDetailedMain = styled.main`
  background-color: ${colors.productDetailedBg};
`;

export const ProductDetailsSection = styled.section`
  padding: 26px 14px;
`;

export const ProductTitle = styled.h1`
  margin-bottom: 64px;

  font-size: 31px;
  font-weight: 900;
  text-align: center;

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 49px;
  }
`;

export const ProductInfoWrapper = styled.div`
  background-color: ${colors.primaryWhite};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 68px;
    row-gap: 76px;
  }

  @media print {
    display: flex;
    padding: 20px;

    .image-gallery {
      width: 800px;
    }

    section {
      width: 375px;
    }
  }
`;
