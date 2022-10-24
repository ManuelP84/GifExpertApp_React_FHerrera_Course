import { useState } from "react";

/**Counter custom hook */
export const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);
  
    const onAdd = () => setCounter(counter + 1);
    const onSubstract = () => setCounter(counter - 1);
    const onReset = () => setCounter(0);
  
    return {
      counter,
      onAdd,
      onSubstract,
      onReset,
    };
  };