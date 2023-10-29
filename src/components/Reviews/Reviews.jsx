import { serviceMovieReviews } from "api/movieApi";
import { Review } from "components/Review/Review";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsRequest = async () => {
      try {
        const response = await serviceMovieReviews(movieId);
        setMovieReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    movieReviewsRequest();
  }, [movieId]);
  
  return (
    <section>
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
    </section>
  );
};
