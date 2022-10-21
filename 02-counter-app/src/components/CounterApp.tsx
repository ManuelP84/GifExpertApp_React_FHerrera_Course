import * as React from "react";
import { useState, useCallback } from "react";

interface ICounterAppProps {
  value: number;
}

export const CounterApp: React.FunctionComponent<ICounterAppProps> = ({
  value,
}) => {
  const [counter, setCounter] = useState(value);
  
  const addOne = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCounter((c) => c + 1);
      //setCounter(counter + 1);
      console.log(counter);
    },
    []
  );

  const substractOne = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCounter((c) => c - 1);
      console.log(counter);
    },
    []
  );

  const resetCounter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCounter(value);
      console.log(counter);
    },
    []
  );
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={addOne}>+1</button>
      <button onClick={substractOne}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};


