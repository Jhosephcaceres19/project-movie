import api from "../../api/api";

const viewMoviePopular = async () => {
    const response = await api.get(`/movie/top_rated`);
    console.log(response.data.results)
    return response.data.results;
};
const detailMovie = async (id) =>{
  const response = await api.get(`/movie/${id}`)
  return response.data;
}
const genresaction = async (id) =>{
  const response = await api.get(`/discover/movie`,{
    params:{
      with_genres:id,
    },
  });
  return response.data.results;
}
const genresactiontwo = async (id) => {
  const response = await api.get(`/discover/movie`, {
    params: {
      with_genres: id,
      page:2
    },
  });
  return response.data.results;
};
const genresactiontree = async (id) => {
  const response = await api.get(`/discover/movie`, {
    params: {
      with_genres: id,
      page:3
    },
  });
  return response.data.results;
};
const genrehorror = async (id) =>{
  const response = await api.get(`/discover/movie`,{
    params:{
      with_genres:id
    },
  });
  return response.data.results;
}
const searchMovie = async (query) => {
  const response = await api.get('/search/movie',{
    params:{
      query: query
    }
  })
  return response.data.results;
}

export default {
  viewMoviePopular,
  detailMovie,
  searchMovie,
  genresaction,
  genrehorror,
  genresactiontwo,
  genresactiontree
};
