import styled from 'styled-components';

export const ContainerStyled = styled.div`
  & {
    /*Basic styles*/
    min-width: 320px;
    max-width: 375px;
    margin: 0 auto;
  }

  /*Tablet styles*/
  @media only screen and (min-width: 768px) {
    & {
      max-width: 768px;
    }
  }

  /*Desktop styles*/
  @media only screen and (min-width: 1280px) {
    & {
      max-width: 1280px;
    }
  }
`;
