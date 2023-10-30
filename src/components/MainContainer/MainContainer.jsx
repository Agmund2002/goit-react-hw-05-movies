import { Title } from "./MainContainer.styled";

export const MainContainer = ({ title, children }) => {
  return (
    <main>
      <Title>{title}</Title>
      {children}
    </main>
  );
};
