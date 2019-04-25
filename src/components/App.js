import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] };

   onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID a020e86bd28d74c6aada61e4f1e930fab56760bd29521f9022274e111d4504cf'
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
