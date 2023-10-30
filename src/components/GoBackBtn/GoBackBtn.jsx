import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { StyledLink } from './GoBackBtn.styled';

export const GoBackBtn = () => {
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/');
  return (
    <StyledLink to={goBackLocationRef.current}>
      <BsArrowLeftShort size={'22px'}/>
      Go back
    </StyledLink>
  );
};
