import { ThreeDots } from 'react-loader-spinner';

export const Loading = () => {
    return (
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#4fa94d"
        visible={true}
      />
    );
}