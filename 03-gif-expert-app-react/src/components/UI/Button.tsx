import * as React from 'react';

interface IButtonProps {
    onAddCategory: any
}

export const Button: React.FunctionComponent<IButtonProps> = ({onAddCategory}) => {
  return (
    <button onClick={onAddCategory}>Add category</button>
  );
};
