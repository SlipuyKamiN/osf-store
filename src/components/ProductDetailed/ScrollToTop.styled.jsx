import styled from '@emotion/styled';
import { LoadMoreButton } from 'components/CategoryLanding/CategoryItemsList.styled';

export const ScrollToTopSection = styled.section`
  padding: 34px 0 50px;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const ScrollToTopButton = styled(LoadMoreButton)`
  display: block;
  margin: 0 auto;
`;
