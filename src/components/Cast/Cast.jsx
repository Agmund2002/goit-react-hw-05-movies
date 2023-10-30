import { serviceMovieCredits } from 'api/movieApi';
import { Actor } from 'components/Actor/Actor';
import { Container } from 'components/Container/Container';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastListItem, Title } from './Cast.styled';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCreditsRequest = async () => {
      try {
        setNotFound(false);
        setError(false);
        setLoading(true);
        const response = await serviceMovieCredits(movieId);

        if (response.cast.length === 0) {
          return setNotFound(true);
        }

        setMovieCredits(response.cast);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    movieCreditsRequest();
  }, [movieId]);

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
        <ErrorMessage text="We don't have any cast information for this movies" />
      )}
      {isVisible() && (
        <section>
          <Container>
            <Title>Cast</Title>
            <CastList>
              {movieCredits.map(item => (
                <CastListItem key={item.id}>
                  <Actor data={item} />
                </CastListItem>
              ))}
            </CastList>
          </Container>
        </section>
      )}
    </>
  );
};
