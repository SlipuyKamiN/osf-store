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

export const AddressText = styled.address`
  max-width: 200px;
  line-height: 1.26;
  margin-top: 22px;
  margin-bottom: 23px;

  @media screen and (min-width: 1280px) {
    margin-top: 17px;
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

export const ContactList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 23px;
  }
`;

export const ContactLink = styled.a`
  &:hover,
  &:focus {
    color: ${colors.accentGreen};
  }
`;

export const BlockList = styled.ul`
  padding-top: 10px;
  padding-left: 10px;

  li:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
    margin-top: 30px;

    li:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const CategoriesList = styled(BlockList)`
  @media screen and (min-width: 1280px) {
    max-height: 227px;
    width: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const ListLink = styled(Link)`
  opacity: 0.7;
  &:hover,
  &:focus {
    color: ${colors.accentGreen};
  }
`;

export const ContactIconsList = styled.ul`
  display: flex;
  margin: 0 auto;
  width: 122px;
  justify-content: space-between;
`;

export const ContactIconLink = styled.a`
  font-size: 20px;
  color: ${colors.gray};

  &:hover,
  &:focus {
    color: ${colors.accentGreen};
  }
  span {
    position: absolute;
    left: -1;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }
`;
