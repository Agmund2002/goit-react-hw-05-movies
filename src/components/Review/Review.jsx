export const Review = ({ data: { author, content, updated_at } }) => {
  return (
    <>
      <h3>{author}</h3>
      <p>{content}</p>
      <span>{updated_at}</span>
    </>
  );
};
