import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${p => p.theme.spacing(2)};
`;

export const Img = styled.img`
height: 500px;
object-fit: cover;
`;

export const Title = styled.h3`
  margin: 0 ${p => p.theme.spacing(3.5)};
`;

export const Rating = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${p => p.theme.spacing(3)};
`;

export const RatingValue = styled.span`
  display: block;
  line-height: 2px;
  font-weight: 500;
`;
