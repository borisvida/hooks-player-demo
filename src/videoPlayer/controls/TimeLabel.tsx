import useCurrentTime from './hooks/useCurrentTime';
import FormattedTime from './FormattedTime';

type Props = {
  video: HTMLVideoElement | null;
};

const TimeLabel = ({ video }: Props) => {
  const { currentTime, duration } = useCurrentTime(video);
  return (
    <div className="time">
      <FormattedTime time={currentTime} />/
      <FormattedTime time={duration} />
    </div>
  );
};

export default TimeLabel;
