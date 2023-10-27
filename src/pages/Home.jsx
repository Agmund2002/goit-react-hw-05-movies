import { serviceTrendingMovies } from 'api/movieApi';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const response = await serviceTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    trendingMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      <TrendingMoviesList data={movies} />
    </section>
  );
};

export default Home;
