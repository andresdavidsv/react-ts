import { useCounter } from '../hooks/useCounter';

export const CountWithHook = () => {
  const { value, accum } = useCounter();
  return (
    <>
      <h3>
        Count With Hook: <small>{value}</small>{' '}
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
