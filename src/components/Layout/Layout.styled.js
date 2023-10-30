import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;

export const NavigationLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;

width: 60px;
height: 30px;
font-size: 18px;
font-weight: 500;

&.active {
    color: ${p => p.theme.colors.active};
    text-decoration: overline;
}
`;