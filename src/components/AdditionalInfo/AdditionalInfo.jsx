
import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { List, Section, StyledNavLink, Title } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>Additional information</Title>
          <List>
            <li>
              <StyledNavLink to="cast">Cast</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews">Reviews</StyledNavLink>
            </li>
          </List>
        </Container>
      </Section>
      <Outlet />
    </>
  );
};
