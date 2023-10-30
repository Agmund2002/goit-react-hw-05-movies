import { MainContainer } from 'components/MainContainer/MainContainer';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  return (
    <MainContainer title="Movies">
      <SearchForm />
      <MoviesList />
    </MainContainer>
  );
};

export default MoviesPage;
