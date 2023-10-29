import { MovieCard } from 'components/MovieCard/MovieCard';
import { serviceSearchMovies } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (query === '') {
          return;
        }

        const response = await serviceSearchMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovies();
  }, [query]);

  return (
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
  );
};
