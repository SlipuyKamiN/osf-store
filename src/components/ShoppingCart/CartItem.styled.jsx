import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
`;

export const ItemInfoWrapper = styled.div`
  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 20px;

    margin-bottom: 0;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  max-width: 368px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    width: 96px;
    margin-bottom: 0;
  }
`;

export const ItemTitle = styled.h3`
  margin-bottom: 12px;

  font-size: 16px;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  color: #bdc3c7;
`;

export const ItemTotalPriceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (min-width: 1280px) {
    align-items: center;

    gap: 59px;
  }
`;

export const ItemTotalPrice = styled.p`
  font-size: 30px;
  font-weight: 900;
`;

export const ItemRemoveButton = styled.button`
  width: 29px;
  height: 29px;
  padding: 0;

  border: 2px solid ${colors.desert};
  border-radius: 50%;

  font-size: 18px;
  font-weight: 900;

  color: ${colors.gray};
  background-color: transparent;

  transform: rotate(45deg);
`;
