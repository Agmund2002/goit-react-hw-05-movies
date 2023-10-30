
import { Container } from 'components/Container/Container';
import { Link, Outlet } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <>
      <section>
        <Container>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </Container>
      </section>
      <Outlet />
    </>
  );
};
