import { MainContainer } from 'components/MainContainer/MainContainer';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const [timer, setTimer] = useState(10);
  const navigator = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer === 0) {
          navigator('/');
          return;
      }

        setTimer(timer - 1);
    }, 1000);
      return () => {
      clearTimeout(timeout);
    };
  }, [timer, navigator]);

  return (
    <MainContainer title="Not found">
      <p>
        Sorry, something went wrong. Click the link to go to the home page or
        wait 10 seconds
      </p>
      <span>{timer}</span>
      <Link to="/">Go home page</Link>
    </MainContainer>
  );
};

export default NotFoundPage;
