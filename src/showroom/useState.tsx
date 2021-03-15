import React, { useState } from 'react';

type Props = { initialCount: number };

const getInitialCount = (count: number) => count;

const Example = ({ initialCount }: Props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState<number>(
    getInitialCount(initialCount),
  );

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example;
