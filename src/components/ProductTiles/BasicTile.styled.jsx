import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const BasicCard = styled.li`
  position: relative;
  width: 270px;
  height: 368px;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 261px;
`;

export const BasicDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 107px;
  padding: 20px;

  background-color: ${colors.primaryWhite};
`;

export const BasicTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.fontGray};
`;

export const BasicLabel = styled.p`
  font-size: 14px;
  font-weight: 900;
  text-transform: capitalize;
  color: ${colors.accentGreen};
`;
