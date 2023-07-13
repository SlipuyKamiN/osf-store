import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const CategoryListSection = styled.section`
  padding: 0;
  text-align: center;

  padding: 21px 0 50px;

  @media screen and (min-width: 1280px) {
    padding: 31px 0 75px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 27px;

  & > li {
    width: 293px;

    @media screen and (min-width: 1280px) {
      width: 270px;
    }
  }
`;

export const LoadMoreButton = styled.button`
  width: 156px;
  height: 39px;
  margin: 0;
  margin-top: 47px;
  border-radius: 20px;

  text-align: center;
  text-transform: uppercase;

  color: ${colors.primaryWhite};
  background-color: ${colors.accentGreen};

  border: 2px solid RGBA(217, 217, 217, 1);

  transition: background-color ${transition.duration},
    border-color ${transition.duration};

  @media screen and (min-width: 1280px) {
    margin-top: 117px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.accentBlue};
    border-color: ${colors.accentGreen};
  }
`;
