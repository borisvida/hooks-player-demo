import PlayPause from './PlayPause';
import TimeLabel from './TimeLabel';

type Props = {
  video: HTMLVideoElement | null;
};

const Controls = ({ video }: Props) => {
  return (
    <div>
      <PlayPause video={video} />
      <TimeLabel video={video} />
    </div>
  );
};

export default Controls;
