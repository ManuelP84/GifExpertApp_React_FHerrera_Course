import * as React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";

interface IGifGridProps {
  category: string;
  key: string;
}

export const GifGrid: React.FunctionComponent<IGifGridProps> = ({
  category,
}) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div>
        <h3>{category}</h3>
        <>
          {isLoading && (<h2>Loading...</h2>)}
        </>
        <div className="card-grid">
          {images.map((gif: any) => (
            <GifGridItem key={gif.id} {...gif} />
          ))}
        </div>
      </div>
    </>
  );
};
