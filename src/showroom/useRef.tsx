import { useRef } from 'react';

const Example = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default Example;
