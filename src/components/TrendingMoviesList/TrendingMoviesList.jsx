import { MovieCard } from 'components/MovieCard/MovieCard';
import { serviceTrendingMovies } from 'api/movieApi';
import { useEffect, useState } from 'react';

export const TrendingMoviesList = () => {
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
      <h2>Trending today</h2>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <MovieCard info={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
