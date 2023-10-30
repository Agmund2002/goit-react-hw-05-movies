import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;

  line-height: 16px;
  font-weight: 500;

  border: 1px solid ${p => p.theme.colors.mainBorder};
  border-radius: 10px;
  margin-bottom: ${p => p.theme.spacing(2)};

  width: 100px;
  height: 30px;

  &:active {
    color: ${p => p.theme.colors.active};
    border-color: ${p => p.theme.colors.active};
  }
`;
