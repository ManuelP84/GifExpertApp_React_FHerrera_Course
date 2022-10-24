import * as React from "react";

import { useArrayCounter } from "./hooks/useArrayCounter";
import { useCounter } from "./hooks/useCounter";

interface ICounterAppProps {}

export const CounterApp: React.FunctionComponent<ICounterAppProps> = (
  props
) => {
  const {
    counter: counter1,
    onAdd: onAdd1,
    onSubstract: onSubstract1,
    onReset: onReset1,
  } = useCounter(10);

  const {
    counter: counter2,
    onAdd: onAdd2,
    onSubstract: onSubstract2,
    onReset: onReset2,
  } = useCounter(10);

  const { counterA, counterB, counterC, onAddOneToA } = useArrayCounter({
    counterA: 0,
    counterB: 0,
    counterC: 0,
  });

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <button className="btn btn-primary" onClick={onAdd1}>
        + 1
      </button>
      <button className="btn btn-danger" onClick={onReset1}>
        Reset
      </button>
      <button className="btn btn-warning" onClick={onSubstract1}>
        - 1
      </button>
      <hr />
      <h1>Counter: {counter2}</h1>
      <button className="btn btn-primary" onClick={onAdd2}>
        + 1
      </button>
      <button className="btn btn-danger" onClick={onReset2}>
        Reset
      </button>
      <button className="btn btn-warning" onClick={onSubstract2}>
        - 1
      </button>
      <hr />
      <h1>Counter Array A: {counterA}</h1>
      <h1>Counter Array B: {counterB}</h1>
      <h1>Counter Array C: {counterC}</h1>
      <button className="btn btn-primary" onClick={onAddOneToA}>
        + 1
      </button>
      <hr />
    </>
  );
};
