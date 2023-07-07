import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const AddressText = styled.p`
  max-width: 200px;
  line-height: 1.26;
  margin-top: 22px;
  margin-bottom: 23px;

  @media screen and (min-width: 1280px) {
    margin-top: 17px;
  }
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
