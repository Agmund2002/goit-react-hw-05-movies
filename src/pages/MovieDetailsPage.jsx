import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/');
  return (
    <MainContainer title="Movie details">
      <Link to={goBackLocationRef.current}>
        <BsArrowLeftShort />
        Go back
      </Link>
      <MovieDetails />
      <AdditionalInfo />
    </MainContainer>
  );
};

export default MovieDetailsPage;
