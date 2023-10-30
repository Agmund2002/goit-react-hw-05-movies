import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const Section = styled.section`
  margin-bottom: ${p => p.theme.spacing(4)};
`;

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

export const FormStyled = styled(Form)`
  position: relative;

  @media only screen and (min-width: 768px) {
    & {
      width: 350px;
      margin-left: 25%;
    }
  }

  @media only screen and (min-width: 1280px) {
    & {
      width: 400px;
      margin-left: 33%;
    }
  }
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 30px;

  line-height: 32px;

  border-radius: 26px;
  border: 2px solid ${p => p.theme.colors.mainBorder};

  padding-left: ${p => p.theme.spacing(3)};
  padding-right: ${p => p.theme.spacing(9)};
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  top: ${p => p.theme.spacing(1)};
  left: ${p => p.theme.spacing(3)};
  color: ${p => p.theme.colors.error};
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  background-color: ${p => p.theme.colors.mainBorder};
  border-radius: 0px 26px 26px 0px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 2px;
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.active};

  }
`;
