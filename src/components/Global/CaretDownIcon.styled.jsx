import styled from '@emotion/styled';

export const Icon = styled.span`
  display: inline-block;
  margin-left: 10px;
  rotate: ${props => (props.isOpen ? '180deg' : '0deg')};
`;
