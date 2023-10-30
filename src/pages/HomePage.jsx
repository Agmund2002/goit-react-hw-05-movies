import { MainContainer } from 'components/MainContainer/MainContainer';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

const HomePage = () => {
  return (
    <MainContainer title="Home">
      <TrendingMoviesList />
    </MainContainer>
  );
};

export default HomePage;
