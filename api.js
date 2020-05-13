const API = 'https://api-image-search.now.sh/search?q=';

export default async term => {
  const response = await fetch(`${API}${term}`);
  const { images } = await response.json();

  return images;
};
