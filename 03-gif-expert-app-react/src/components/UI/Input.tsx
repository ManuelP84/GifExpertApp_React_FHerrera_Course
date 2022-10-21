import * as React from 'react';

interface IInputProps {
    onChangeInput: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FunctionComponent<IInputProps> = ({onChangeInput}) => {
  return (
    <input onChange={onChangeInput}></input>
  );
};

