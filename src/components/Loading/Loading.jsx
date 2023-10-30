import { Container } from 'components/Container/Container';
import { ThreeDots } from 'react-loader-spinner';
import { LoadingBox } from './Loading.styled';

export const Loading = () => {
  return (
    <Container>
      <LoadingBox>
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#19cf68"
          visible={true}
        />
      </LoadingBox>
    </Container>
  );
}