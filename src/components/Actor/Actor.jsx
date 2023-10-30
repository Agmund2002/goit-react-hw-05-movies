import { ActorImg, ActorInfoList, ActorName, Character } from "./Actor.styled";

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';
const PLACEHOLDER =
  'https://designessentiamagazine.com/wp-content/themes/fox/images/placeholder.jpg';

export const Actor = ({
  data: { character, name, profile_path },
}) => {
  return (
    <>
      {profile_path ? (
        <ActorImg
          src={`${BASIC_IMG_URL}${profile_path}`}
          alt={name}
          loading="lazy"
        />
      ) : (
        <ActorImg src={PLACEHOLDER} alt="placeholder" loading="lazy" />
      )}
      <ActorInfoList>
        <li>
          {name ? (
            <ActorName>{name}</ActorName>
          ) : (
            <ActorName>unknown</ActorName>
          )}
        </li>
        <li>
          <Character>Character: </Character>
          {character ? <span>{character}</span> : <span>unknown</span>}
        </li>
      </ActorInfoList>
    </>
  );
};
