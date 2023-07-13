import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

export const TabsSection = styled.section`
  display: none;
  width: 100%;
  padding: 0;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const TabsList = styled.ul`
  display: flex;
  margin: 0 auto;
  gap: 0;
  align-items: center;
  justify-content: center;
`;

export const TabListItem = styled.li`
  padding: 24px 0;
`;

export const TabLink = styled(NavLink)`
  font-size: 24px;
  padding: 24px 52px;
  color: ${colors.gray};
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  transition: background-color ${transition.duration};

  &.active {
    color: ${colors.primaryWhite};
    background-color: ${colors.primaryBg};
  }
`;

export const TabInfoWrapper = styled.div`
  display: flex;
  gap: 85px;
  padding: 70px;
  width: 100%;

  color: ${colors.primaryWhite};
  background-color: ${colors.primaryBg};
`;
