import * as React from "react";
import { useState } from "react";
import { getGifs } from "../../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    getGifs(category)
      .then((gifs) => {
        setTimeout(() => {
          setImages(gifs)
          setIsLoading(false)
        }, 500);        
      })
      //.then(() => {setIsLoading(false)});
  }, []);
  return {
    images,
    isLoading,
    setIsLoading,
  };
};
