import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';
import { BasicCard } from './BasicTile.styled';

export const CommentCard = styled(BasicCard)`
  text-align: left;

  background-image: linear-gradient(
      0deg,
      rgba(117, 102, 171, 0.9) 0%,
      rgba(213, 93, 138, 0.9) 100%
    ),
    url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: ${colors.primaryWhite};
`;

export const CommentWrapper = styled.div`
  position: absolute;
  left: 32px;
  bottom: 40px;
`;

export const CommentText = styled.p`
  width: 132px;
  margin-bottom: 20px;
`;

export const CommentDate = styled.p`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  gap: 13px;
  text-transform: uppercase;
`;
