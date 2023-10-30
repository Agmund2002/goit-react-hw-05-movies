import { serviceMovieReviews } from "api/movieApi";
import { Review } from "components/Review/Review";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { Container } from "components/Container/Container";
import { ListItem, ReviewsList, Title } from "./Reviews.styled";

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
   const [notFound, setNotFound] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsRequest = async () => {
      try {
        setNotFound(false);
        setError(false);
        setLoading(true);
        const response = await serviceMovieReviews(movieId);

         if (response.results.length === 0) {
           return setNotFound(true);
         }

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
        <ErrorMessage text="We don't have any reviews for this movies" />
      )}
      {isVisible() && (
        <section>
          <Container>
            <Title>Reviews</Title>
            <ReviewsList>
              {movieReviews.map(item => (
                <ListItem key={item.id}>
                  <Review data={item} />
                </ListItem>
              ))}
            </ReviewsList>
          </Container>
        </section>
      )}
    </>
  );
};
