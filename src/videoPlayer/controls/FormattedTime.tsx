import { useMemo, memo } from 'react';

type Props = {
  time: number;
};

const FormattedTime = memo<Props>(({ time }: Props) => {
  const mins = useMemo(
    () =>
      Math.floor(time / 60)
        .toString()
        .padStart(2, '0'),
    [Math.floor(time / 60)],
  );

  const secs = useMemo(
    () =>
      Math.floor(time % 60)
        .toString()
        .padStart(2, '0'),
    [Math.floor(time % 60)],
  );

  return (
    <span>
      {mins}:{secs}
    </span>
  );
});

export default FormattedTime;
