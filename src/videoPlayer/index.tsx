import { useState } from 'react';
import Video from './Video';
import Controls from './controls';

const VIDEO_SOURCE =
  'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

const VideoPlayer = () => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  return (
    <div className="player">
      <Video source={VIDEO_SOURCE} setVideo={setVideo} />
      <Controls video={video} />
    </div>
  );
};

export default VideoPlayer;
