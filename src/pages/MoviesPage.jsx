import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm";

const MoviesPage = () => {
  return (
    <main>
      <h1>Movies</h1>
      <SearchForm />
      <MoviesList />
    </main>
  );
};

export default MoviesPage;