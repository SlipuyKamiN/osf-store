import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 27px;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 264px;
  height: 39px;
  margin: 48px auto 0;
  border-radius: 20px;

  text-transform: uppercase;
  font-size: 14px;

  color: ${colors.desert};
  border: 2px solid ${colors.desert};
  background-color: transparent;
  transition: background-color ${transition.duration},
    color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryBlack};
    background-color: ${colors.accentGreen};
  }
`;
