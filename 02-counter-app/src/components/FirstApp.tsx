import * as React from "react";

const myFunc = () => {
  return "Im Legend!";
};

interface IAppProps {
  title?: string;
  name?: string,
  age?: number
}

export const FirstApp: React.FunctionComponent<IAppProps> = ({
  title = "manuelP",
}) => {
  return (
    <>
      <h3>Manuel Pineda...{myFunc()}</h3>
      <h1>{title}</h1>
    </>
  );
};
