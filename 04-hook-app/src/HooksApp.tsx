import * as React from 'react';
import { CounterApp } from './01-useState/CounterApp';

interface IHooksAppProps {
}

export const HooksApp: React.FunctionComponent<IHooksAppProps> = (props) => {
  return (
    <>
    <CounterApp />
    </>
  );
};

