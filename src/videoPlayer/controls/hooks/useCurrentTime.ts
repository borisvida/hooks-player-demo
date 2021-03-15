import { useState, useEffect, useCallback } from 'react';

const useCurrentTime = (video: HTMLVideoElement | null) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime(video?.currentTime || 0);
  }, [video]);

  const resetDuration = useCallback(() => {
    setDuration(video?.duration || 0);
  }, [video, setDuration]);

  useEffect(() => {
    video?.addEventListener('timeupdate', updateTime);
    video?.addEventListener('canplay', resetDuration);

    return () => {
      video?.removeEventListener('timeupdate', updateTime);
      video?.removeEventListener('canplay', resetDuration);
    };
  }, [video, updateTime]);

  return { currentTime, duration };
};

export default useCurrentTime;
