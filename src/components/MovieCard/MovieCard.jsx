import { Link, useLocation } from "react-router-dom";

export const MovieCard = ({ info }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${info.id}`} state={{from: location}} >
      {info.title}
    </Link>
  );
};
