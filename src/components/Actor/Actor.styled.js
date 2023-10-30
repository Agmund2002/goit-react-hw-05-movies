import styled from 'styled-components';

export const ActorImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ActorInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  padding: ${p => p.theme.spacing(3)};
`;

export const ActorName = styled.span`
font-size: 18px;
  font-weight: 500;
`;

export const Character = styled.span`
  color: ${p => p.theme.colors.secondColor};
  font-style: italic;
`;
