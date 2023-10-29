import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/');
  return (
    <main>
      <h1>Movie details</h1>
      <Link to={goBackLocationRef.current}>Go back</Link>
      <MovieDetails />
      <AdditionalInfo />
    </main>
  );
};

export default MovieDetailsPage;