import { serviceMovieReviews } from "api/movieApi";
import { Review } from "components/Review/Review";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { Container } from "components/Container/Container";

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsRequest = async () => {
      try {
        setLoading(true);
        const response = await serviceMovieReviews(movieId);
        setMovieReviews(response.results);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    movieReviewsRequest();
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
            <h2>Reviews</h2>
            {movieReviews.length > 0 ? (
              <ul>
                {movieReviews.map(item => (
                  <li key={item.id}>
                    <Review data={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>We don't have any reviews for this movies</p>
            )}
          </Container>
        </section>
      )}
    </>
  );
};
