import { serviceMovieDetails } from "api/movieApi";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({})
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
          genres: genresName,
        });
      } catch (error) {
        console.log(error);
      }
    };

    movieDetailsRequest();
  }, [movieId])

  return (
    <main>
      <h1>Movie details</h1>
      <MovieDetails data={movieDetails} />
      <AdditionalInfo />
    </main>
  );
};

export default MovieDetailsPage;