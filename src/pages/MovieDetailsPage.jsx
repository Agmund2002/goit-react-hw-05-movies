import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  return (
    <MainContainer title="Movie details">
      <GoBackBtn />
      <MovieDetails />
      <AdditionalInfo />
    </MainContainer>
  );
};

export default MovieDetailsPage;
