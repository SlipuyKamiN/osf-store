import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding-left: 10px;
  margin-top: 10px;
  width: 50%;

  & > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ServiceLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
`;
