import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loading/Loading';
import { Header, Nav, NavigationLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Nav>
      </Header>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};
