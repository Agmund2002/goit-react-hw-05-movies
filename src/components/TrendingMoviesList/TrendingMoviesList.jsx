import { MovieCard } from 'components/MovieCard/MovieCard';
import { serviceTrendingMovies } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { GridItem, ListGrid, Title } from './TrendingMoviesList.styled';
import { Container } from 'components/Container/Container';

export const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setNotFound(false);
        setError(false);
        setLoading(true);
        const response = await serviceTrendingMovies();

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

    trendingMovies();
  }, []);

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
        <ErrorMessage text="Nothing was found.Please reload the page!" />
      )}
      {isVisible() && (
        <section>
          <Container>
            <Title>Trending today</Title>
            <ListGrid>
              {movies.map(item => (
                <GridItem key={item.id}>
                  <MovieCard info={item} />
                </GridItem>
              ))}
            </ListGrid>
          </Container>
        </section>
      )}
    </>
  );
};
