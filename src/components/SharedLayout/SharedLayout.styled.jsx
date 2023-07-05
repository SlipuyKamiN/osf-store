import styled from '@emotion/styled';

export const Container = styled.div`
  outline: 1px solid tomato;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 55px;
  }
`;
