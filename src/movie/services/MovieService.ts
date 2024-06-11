import api from "../../api/api";

const viewMoviePopular = async () => {
  const response = await api.get(`/movie/popular`);
  return response.data;
};
const detailMovie = async (id) =>{
  const response = await api.get(`/movie/${id}`)
  return response.data;
}
const searchMovie = async (query) => {
  const response = await api.get('/search/movie',{
    params:{
      query: query
    }
  })
  return response.data;
}

export default {
  viewMoviePopular,
  detailMovie,
  searchMovie
};
