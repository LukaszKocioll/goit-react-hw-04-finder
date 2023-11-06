import { useState } from 'react';

export function useQuery(initialValue = '') {
  const [query, setQuery] = useState(initialValue);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  }

  return { query, handleSearch };
}