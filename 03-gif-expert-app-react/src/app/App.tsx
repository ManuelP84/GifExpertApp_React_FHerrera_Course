import * as React from "react";
import { useState } from "react";
import { GifForm } from "../components/Gif/Form/Form";
import { GifGrid } from "../components/Gif/Grid/GifGrid";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  const [categories, setCategories] = useState([""]);
  const [inputCategory, setInputCategory] = useState("");

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories((items) => [newCategory, ...items]);

    // 2. way
    //setCategories([inputCategory, ...categories]])
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCategory(event.target.value);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <GifForm onAddCategory={(value: string) => onAddCategory(value)} />
      {/* <Input onChangeInput={onChangeInput}/>*/}
      {/* <Button onAddCategory={onAddCategory}></Button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
};

export default App;
