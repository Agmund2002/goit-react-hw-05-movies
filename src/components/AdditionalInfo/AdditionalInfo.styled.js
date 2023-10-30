import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 500;

  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.spacing(5)};

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: ${p => p.theme.spacing(3)};
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 100px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  border: 1px solid ${p => p.theme.colors.mainBorder};
  border-radius: 7px;

  &.active {
    color: ${p => p.theme.colors.active};
    border-color: ${p => p.theme.colors.active};
  }
`;
