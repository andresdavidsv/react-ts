import { useState } from 'react';

export const Count = () => {

  const [value, setValue] = useState<number>(0);

  const accum = (number: number) => {
    setValue(value + number);
  };
  return (
    <>
      <h3>
        Count: <small>{value}</small>{' '}
      </h3>
      <button className="btn btn-primary" onClick={() => accum(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => accum(-1)}>
        -1
      </button>
    </>
  );
};
