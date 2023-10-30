import { MovieCard } from 'components/MovieCard/MovieCard';
import { serviceSearchMovies } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { GridItem, GridList, Title } from './MoviesList.styled';
import { Container } from 'components/Container/Container';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (query === '') {
          return;
        }

        setMovies([]);
        setNotFound(false);
        setError(false);
        setLoading(true);
        const response = await serviceSearchMovies(query);

        if (response.results.length === 0) {
          return setNotFound(true);
        }

        setMovies(response.results);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  const isVisible = () => {
    if (loading || error || notFound) {
      return false;
    }
    return true;
  };

  return (
    <>
      {loading && <Loading />}
      {error && (
        <ErrorMessage text="Oops... Something went wrong. Please reload the page!" />
      )}
      {notFound && (
        <ErrorMessage text="Nothing was found for this query. Please, try again" />
      )}
      {isVisible() && (
        <section>
          <Container>
            <Title>Search movies</Title>
            <GridList>
              {movies.map(item => (
                <GridItem key={item.id}>
                  <MovieCard info={item} />
                </GridItem>
              ))}
            </GridList>
          </Container>
        </section>
      )}
    </>
  );
};
