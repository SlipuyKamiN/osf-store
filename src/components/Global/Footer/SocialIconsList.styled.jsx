import styled from '@emotion/styled';
import { colors } from 'styles/vars';

export const ContactIconsList = styled.ul`
  display: flex;
  margin: 0 auto;
  width: 122px;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
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
