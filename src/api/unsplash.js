import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a020e86bd28d74c6aada61e4f1e930fab56760bd29521f9022274e111d4504cf'
  }
});
