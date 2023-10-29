import { serviceMovieDetails } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const movieDetailsRequest = async () => {
      try {
        const response = await serviceMovieDetails(movieId);
        const releaseDate = new Date(response.release_date);
        const genresName = response.genres.map(item => item.name).join(', ');
        setMovieDetails({
          ...response,
          release_date: releaseDate.getFullYear(),
          vote_average: response.vote_average.toFixed(1),
          genres: genresName,
        });
      } catch (error) {
        console.log(error);
      }
    };

    movieDetailsRequest();
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <section>
      {poster_path && (
        <img
          src={`${BASIC_IMG_URL}${poster_path}`}
          alt={title}
          loading="lazy"
        />
      )}
      <h2>
        {title} ({release_date})
      </h2>
      <span>{vote_average}</span>
      <p>{overview}</p>
      <span>{genres}</span>
    </section>
  );
};
