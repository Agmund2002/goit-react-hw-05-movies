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

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(3)};
`;

export const CastListItem = styled.li`
  flex-basis: calc((100% - ${p => p.theme.spacing(3)}) / 2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% - (${p => p.theme.spacing(3)} * 3)) / 4);
  }

  @media only screen and (min-width: 1280px) {
    flex-basis: calc((100% - (${p => p.theme.spacing(3)} * 6)) / 7);
  }
`;
