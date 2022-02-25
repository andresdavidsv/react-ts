import { useState } from 'react';

export const useCounter = (initialState: number = 10) => {
  const [value, setValue] = useState<number>(initialState);

  const accum = (number: number) => {
    setValue(value + number);
  };
  return {
    value,
    accum,
  };
};
