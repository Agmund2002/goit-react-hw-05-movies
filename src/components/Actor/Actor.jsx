const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const Actor = ({
  data: { character, name, popularity, profile_path },
}) => {
  return (
    <>
      {profile_path && (
        <img src={`${BASIC_IMG_URL}${profile_path}`} alt={name} />
      )}
      <ul>
        <li>Name: {name}</li>
        <li>Character: {character}</li>
      </ul>
    </>
  );
};
