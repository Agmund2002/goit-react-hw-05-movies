import { ErrorMessageStyled } from "./ErrorMessage.styled";

export const ErrorMessage = ({text}) => {
    return <ErrorMessageStyled>{text}</ErrorMessageStyled>;
}