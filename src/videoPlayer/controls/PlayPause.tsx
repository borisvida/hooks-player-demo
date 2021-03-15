import usePlayPause from './hooks/usePlayPause';

type Props = {
  video: HTMLVideoElement | null;
};

const PlayPause = ({ video }: Props) => {
  const { togglePlaying, isPlaying } = usePlayPause(video);

  return (
    <button onClick={togglePlaying}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPause;
