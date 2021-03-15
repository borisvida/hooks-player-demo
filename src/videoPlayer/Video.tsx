import './Video.css';

type Props = {
  source: string;
  setVideo: (video: HTMLVideoElement) => void;
};

const Video = ({ source, setVideo }: Props) => {
  return <video src={source} ref={setVideo} />;
};

export default Video;
