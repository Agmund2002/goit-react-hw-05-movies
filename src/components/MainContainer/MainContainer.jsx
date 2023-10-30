export const MainContainer = ({ title, children }) => {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
};
