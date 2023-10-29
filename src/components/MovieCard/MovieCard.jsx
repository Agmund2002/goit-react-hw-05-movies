import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const MovieCard = ({
  info: { id, title, poster_path, release_date, vote_average },
}) => {
  const location = useLocation();
  const releaseDate = new Date(release_date);

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      {poster_path && (
        <img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
      )}
      <h3>
        {title}({releaseDate.getFullYear()})
      </h3>
      <div>
        <StarRatings
          rating={vote_average}
          numberOfStars={10}
          starRatedColor="#ffc414"
          starDimension="20px"
          starSpacing='2px'
        />
      </div>
      <span>{vote_average.toFixed(1)}</span>
    </Link>
  );
};
