// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3', 
  params: {
    api_key: 'f3ab1eb0e744146be3466d76cdf2def4', // clave de API
  },
});

export default api;  