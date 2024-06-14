import axios from "axios"

const api_key = 'f3ab1eb0e744146be3466d76cdf2def4';
const api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2FiMWViMGU3NDQxNDZiZTM0NjZkNzZjZGYyZGVmNCIsInN1YiI6IjY2NjYyODZkMDlhOGY5YmNiNGM4Yjk2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.75l8r20gpMWFYuduIYk2k8i92bt0-1g_v461WxiQ2Z8';


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