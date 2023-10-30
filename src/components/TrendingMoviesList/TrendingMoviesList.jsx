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

  const isVisible = () => {
    if (loading || error) {
      return false;
    }
    return true;
  }

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
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
