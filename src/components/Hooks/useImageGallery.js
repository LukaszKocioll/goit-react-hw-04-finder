import { useState, useEffect } from 'react';

export function useImageGallery(query) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setImages([]);
    fetchImages(query);
  }, [query]);

  const fetchImages = (query) => {
    const apiKey = '39359840-efcb8fae7f1af4010e3363a8b';
    const perPage = 12;
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    setIsLoading(true);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setIsLoading(false);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return { images, isLoading, error, fetchImages };
}
