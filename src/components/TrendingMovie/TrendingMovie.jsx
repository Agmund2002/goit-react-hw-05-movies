import { Link } from 'react-router-dom';

export const TrendingMovie = ({info}) => {
  return <Link to={`/movies/${info.id}`}>{info.title}</Link>;
};
