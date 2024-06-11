import axios from "axios"

const api_key = process.env.REACT_APP_API_KEY;
const api_token = process.env.REACT_APP_API_TOKEN;


if(!api_key){
  throw new Error('Api key is missing')
}
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers:{
    'Authorization': `Bearer ${api_token}`
  },
  params:{
    api_key: api_key
  }
});

export default api;