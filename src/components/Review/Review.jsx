export const Review = ({ data: { author, content, updated_at } }) => {
  const date = new Date(updated_at);
  
  return (
    <>
      <h3>{author}</h3>
      <p>{content}</p>
      <span>{date.toUTCString()}</span>
    </>
  );
};
