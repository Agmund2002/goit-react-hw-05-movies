import { MovieCard } from 'components/MovieCard/MovieCard';
import { serviceSearchMovies } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (query === '') {
          return;
        }

        setLoading(true);
        const response = await serviceSearchMovies(query);
        setMovies(response.results);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {!loading && (
        <section>
          <h2>Search movies</h2>
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
