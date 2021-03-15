import React, { useEffect } from 'react';

type Props = {
  message: string;
};

const Example = ({ message }: Props) => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [message]);

  return <div>I'm logging to console "{message}"</div>;
};

export default Example;
