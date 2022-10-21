export const getGifs = async (term: string) => {
  const api_key = "0JJrBORqFxZ5HK3nvEAnrDTQPAAwQIip";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${term}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(
    (gif: {
      id: any;
      title: any;
      images: { downsized_medium: { url: any } };
    }) => ({
      id: gif.id,
      title: gif.title,
      image: gif.images.downsized_medium.url,
    })
  );

  return gifs;
};
