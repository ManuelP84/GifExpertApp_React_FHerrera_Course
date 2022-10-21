import * as React from "react";
import { useState } from "react";

interface ICategoryFormProps {
  onAddCategory: Function;
}

export const GifForm: React.FunctionComponent<ICategoryFormProps> = ({
  onAddCategory,
}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};
