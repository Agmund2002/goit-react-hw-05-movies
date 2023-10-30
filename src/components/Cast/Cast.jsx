import { serviceMovieCredits } from 'api/movieApi';
import { Actor } from 'components/Actor/Actor';
import { Container } from 'components/Container/Container';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCreditsRequest = async () => {
      try {
        setLoading(true);
        const response = await serviceMovieCredits(movieId);
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
     if (loading || error) {
       return false;
     }
     return true;
   };

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {isVisible() && (
        <section>
          <Container>
            <h2>Cast</h2>
            <ul>
              {movieCredits.map(item => (
                <li key={item.id}>
                  <Actor data={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
};
