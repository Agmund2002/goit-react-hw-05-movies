import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.spacing(3)};
  font-size: 28px;
  font-weight: 700;
`;

export const ListGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(4)};
`;

export const GridItem = styled.li`
  flex-basis: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
  padding-bottom: ${p => p.theme.spacing(2)};

  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% - ${p => p.theme.spacing(4)} * (2 - 1)) / 2);
  }

  @media only screen and (min-width: 1280px) {
    flex-basis: calc((100% - ${p => p.theme.spacing(4)} * (4 - 1)) / 4);
  }
`;
