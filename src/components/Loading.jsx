import { InfinitySpin } from 'react-loader-spinner'

const Loading = ({width, height, color}) => {
  return <InfinitySpin width={width} height={height} color={color} />;
};

export default Loading;
