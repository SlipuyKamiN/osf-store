import styled from '@emotion/styled';
import { BasicCard, BasicDescription } from './BasicTile.styled';
import { colors, transition } from 'styles/common/vars';

export const PricedCard = styled(BasicCard)`
  &:hover,
  &:focus {
    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const PricedDescription = styled(BasicDescription)`
  padding-bottom: 20px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: RGBA(35, 196, 110, 0.8);
    opacity: 0;

    transform: translateY(-100%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 19px;

    transition: opacity ${transition.duration}, transform ${transition.duration};
  }
`;

export const AddButton = styled.button`
  display: block;
  width: 93px;
  height: 93px;
  border-radius: 50%;
  padding: 29px;
  padding-top: 33px;

  border: none;

  text-align: center;
  font-size: 31px;

  background-color: ${colors.primaryWhite};

  transition: opacity ${transition.duration};
  &:hover,
  &:focus {
    opacity: 0.6;
  }
`;

export const Price = styled.p`
  color: #011847;
`;
