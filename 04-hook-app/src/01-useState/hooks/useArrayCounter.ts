import { useState } from "react";

export const useArrayCounter = (initialValue: {
  counterA: number;
  counterB: number;
  counterC: number;
}) => {
  const [counter, setCounter] = useState(initialValue);

  const { counterA, counterB, counterC } = counter;

  const onAddOneToA = (): void => {
    setCounter({
      ...counter,
      counterA: counterA + 1,
    });
  };
  return {
    counterA,
    counterB,
    counterC,
    onAddOneToA,
  };
};
