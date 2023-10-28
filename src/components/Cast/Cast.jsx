import { serviceMovieCredits } from 'api/movieApi';
import { Actor } from 'components/Actor/Actor';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCreditsRequest = async () => {
      try {
        const response = await serviceMovieCredits(movieId);
        setMovieCredits(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    
    movieCreditsRequest();
  }, [movieId]);

  return (
    <section>
      <h2>Cast</h2>
      <ul>
        {movieCredits.map(item => (
          <li key={item.id}>
                <Actor data={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
