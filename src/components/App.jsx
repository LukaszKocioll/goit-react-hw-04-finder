import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  handleSearch = (query) => {
    this.setState({ query });
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={query} /> 
      </div>
    );
  }
}

export default App;
