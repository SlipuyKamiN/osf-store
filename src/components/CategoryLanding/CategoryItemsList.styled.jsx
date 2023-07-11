import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const CategoryListSection = styled.section`
  padding: 0;
  text-align: center;
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 27px;
  margin-bottom: 47px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 117px;
  }

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
  border-radius: 20px;

  text-align: center;
  text-transform: uppercase;

  color: ${colors.primaryWhite};
  background-color: ${colors.accentGreen};

  border: 2px solid RGBA(217, 217, 217, 1);

  transition: background-color ${transition.duration},
    border-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.accentBlue};
    border-color: ${colors.accentGreen};
  }
`;
