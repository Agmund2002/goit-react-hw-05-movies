import { PostDate } from "./Review.styled";

export const Review = ({ data: { author, content, updated_at } }) => {
  const date = new Date(updated_at);

  return (
    <>
      {author ? <h3>{author}</h3> : <h3>unknown</h3>}
      {content ? <p>{content}</p> : <p>Not Found</p>}
      <PostDate>{date.toUTCString()}</PostDate>
    </>
  );
};
