import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const HistoryList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  text-transform: capitalize;
  margin-bottom: 35px;

  font-size: 13px;

  color: ${colors.accentGreen};

  @media screen and (min-width: 1280px) {
    margin-bottom: 25px;
  }
`;

export const HistoryListItem = styled.li`
  &:not(:first-of-type)::before {
    content: '/';
    font-weight: 600;
    margin-right: 15px;
  }

  &:last-child {
    color: ${colors.fontGray};
    display: inline-block;
    pointer-events: none;
  }
`;
