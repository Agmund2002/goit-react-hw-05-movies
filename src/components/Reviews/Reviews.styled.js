import styled from 'styled-components';

export const Title = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(7)};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;
