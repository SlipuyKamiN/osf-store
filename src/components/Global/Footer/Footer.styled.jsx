import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'styles/vars';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 24px 0 67px;

  color: ${colors.fontGray};
  background-color: ${colors.primaryWhite};

  font-size: 13px;

  @media screen and (min-width: 1280px) {
    height: 345px;
    padding: 39px 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyrightText = styled.p`
  max-width: 113px;
  line-height: 1.18;
  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const BlockTitle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;

  border: none;
  color: ${colors.fontGray};
  background-color: transparent;

  text-transform: uppercase;
  font-size: inherit;
  font-weight: 600;
`;

export const ListLink = styled(Link)`
  opacity: 0.7;
  &:hover,
  &:focus {
    color: ${colors.accentGreen};
  }
`;
