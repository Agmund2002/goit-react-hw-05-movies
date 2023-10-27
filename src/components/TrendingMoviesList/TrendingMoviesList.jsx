import { TrendingMovie } from 'components/TrendingMovie/TrendingMovie';

export const TrendingMoviesList = ({data}) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <TrendingMovie info={item} />
        </li>
      ))}
    </ul>
  );
};
