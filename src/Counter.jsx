import { useState } from 'react';

function Counter({ serial }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        {serial}: {count}
      </h1>
      <button
        onClick={() => {
          setCount((current) => current + 1);
        }}>
        increase
      </button>
    </>
  );
}
Counter.propTypes = {
  serial: 'string'
};
export default Counter;
