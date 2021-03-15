import { useState, useCallback, useEffect } from 'react';

const usePlayPause = (video: HTMLVideoElement | null) => {
  const [isPlaying, setPlaying] = useState(false);

  const togglePlaying = () => {
    if (isPlaying) {
      video?.pause();
      setPlaying(false);
    } else {
      video?.play();
      setPlaying(true);
    }
  };

  const onPlay = useCallback(() => {
    setPlaying(true);
  }, [setPlaying]);

  const onPause = useCallback(() => {
    setPlaying(false);
  }, [setPlaying]);

  useEffect(() => {
    video?.addEventListener('play', onPlay);
    video?.addEventListener('pause', onPause);

    return () => {
      video?.removeEventListener('play', onPlay);
      video?.removeEventListener('pause', onPause);
    };
  }, [video, onPlay, onPause]);

  return { togglePlaying, isPlaying };
};

export default usePlayPause;
