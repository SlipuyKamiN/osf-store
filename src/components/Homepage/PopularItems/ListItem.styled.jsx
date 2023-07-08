import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

export const ItemCard = styled.li`
  position: relative;
  width: 270px;
  height: 368px;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;

  &:hover,
  &:focus {
    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 261px;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 107px;
  padding: 20px;
  padding-bottom: 8px;

  background-color: ${colors.primaryWhite};
`;

export const ItemTitle = styled.h4`
  color: ${colors.fontGray};
`;

export const ItemDescExtended = styled(ItemDescription)`
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
  background-color: ${colors.primaryWhite};
  width: 93px;
  height: 93px;
  border-radius: 50%;
  padding: 29px;
  padding-top: 33px;

  border: none;

  text-align: center;
  font-size: 31px;
`;

export const BuyNowLink = styled(Link)`
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
`;

export const BuyNowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 201px;
  height: 39px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

export const BuyNowPrice = styled.p`
  width: 50%;
  color: ${colors.accentGreen};
`;

export const BuyNowButton = styled.button`
  height: 100%;
  width: 50%;
  text-align: center;
  background-color: transparent;
  border: none;
  border-left: 2px solid rgba(0, 0, 0, 0.1);

  text-transform: uppercase;
  transition: color ${transition.duration},
    background-color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryWhite};
    background-color: ${colors.accentGreen};
  }
`;
