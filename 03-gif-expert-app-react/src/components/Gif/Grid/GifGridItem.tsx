import * as React from "react";

interface IGifGridItemProps {
  id: string;
  title: string;
  image: string;
}

export const GifGridItem: React.FunctionComponent<IGifGridItemProps> = ({
  title,
  image,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
