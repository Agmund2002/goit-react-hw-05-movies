const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';
const PLACEHOLDER =
  'https://designessentiamagazine.com/wp-content/themes/fox/images/placeholder.jpg';

export const Actor = ({
  data: { character, name, profile_path },
}) => {
  return (
    <>
      {profile_path ? (
        <img src={`${BASIC_IMG_URL}${profile_path}`} alt={name} loading="lazy" />
      ) : (
        <img src={PLACEHOLDER} alt="placeholder" loading="lazy" />
      )}
      <ul>
        <li>Name: {name}</li>
        <li>Character: {character}</li>
      </ul>
    </>
  );
};
