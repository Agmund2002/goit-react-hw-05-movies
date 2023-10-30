import { serviceMovieDetails } from 'api/movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loading } from 'components/Loading/Loading';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const movieDetailsRequest = async () => {
      try {
        setLoading(true);
        const response = await serviceMovieDetails(movieId);
        const releaseDate = new Date(response.release_date);
        const genresName = response.genres.map(item => item.name).join(', ');
        setMovieDetails({
          ...response,
          release_date: releaseDate.getFullYear(),
          vote_average: response.vote_average.toFixed(1),
          genres: genresName,
        });
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    movieDetailsRequest();
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {!loading && (
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
      )}
    </>
  );
};
