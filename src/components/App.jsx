import React from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { useQuery } from './Hooks/useQuery';

const App = () => {
  const { query, handleSearch } = useQuery('');

  return (
    <div>
      <Searchbar onSubmit={handleSearch} query={query} />
      <ImageGallery query={query} /> 
    </div>
  );
}

export default App;