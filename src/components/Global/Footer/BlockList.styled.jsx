import styled from '@emotion/styled';

export const List = styled.ul`
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

  &.categories {
    @media screen and (min-width: 1280px) {
      max-height: 227px;
      width: 500px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;
