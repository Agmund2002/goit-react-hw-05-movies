import { MovieCard } from 'components/MovieCard/MovieCard';
import { serviceTrendingMovies } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';

export const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setLoading(true);
        const response = await serviceTrendingMovies();
        setMovies(response.results);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    trendingMovies();
  }, []);
  
  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {!loading && (
        <section>
          <h2>Trending today</h2>
          <ul>
            {movies.map(item => (
              <li key={item.id}>
                <MovieCard info={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
