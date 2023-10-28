const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const MovieDetails = ({
  data: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
    return (
      <section>
          <img
            src={`${BASIC_IMG_URL}${poster_path}`}
            alt={title}
            loading="lazy"
          />
          <h2>
            {title} ({release_date})
          </h2>
          <span>{vote_average}</span>
          <p>{overview}</p>
          <span>{genres}</span>
      </section>
    );
};
