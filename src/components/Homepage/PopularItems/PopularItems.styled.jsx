import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const PopularItemsSection = styled.section`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: ${colors.primaryBg};

  @media screen and (min-width: 1280px) {
    padding-top: 81px;
    padding-bottom: 59px;
  }
`;

export const SectionTitle = styled.h2`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;

  font-size: 16px;

  color: ${colors.primaryWhite};
  background-color: ${colors.primaryBg};

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: ${colors.primaryWhite};
    opacity: 0.1;
    flex-grow: 1;
    height: 3px;
  }
`;
