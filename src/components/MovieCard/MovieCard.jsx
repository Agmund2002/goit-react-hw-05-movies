import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Img, Rating, RatingValue, StyledLink, Title } from "./MovieCard.styled";

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';
const PLACEHOLDER =
  'https://designessentiamagazine.com/wp-content/themes/fox/images/placeholder.jpg';

export const MovieCard = ({
  info: { id, title, poster_path, release_date, vote_average },
}) => {
  const location = useLocation();
  const releaseDate = new Date(release_date);

  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
      {poster_path ? (
        <Img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} loading="lazy" />
      ) : (
        <Img src={PLACEHOLDER} alt="placeholder" loading="lazy" />
      )}
      <Title>
        {title} ({releaseDate.getFullYear()})
      </Title>
      <Rating>
        <StarRatings
          rating={vote_average}
          numberOfStars={10}
          starRatedColor="#ffc414"
          starDimension="19px"
          starSpacing="1px"
        />
        <RatingValue>{vote_average.toFixed(1)}</RatingValue>
      </Rating>
    </StyledLink>
  );
};
