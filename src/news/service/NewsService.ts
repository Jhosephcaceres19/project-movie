import api from "../../api/api";

const viewsPopular = async () =>{
  const response = await api.get('/movie/top_rated');
  console.log(response.data.results)
  return response.data.results
}
const genrehorror = async (id) => {
  const response = await api.get(`/discover/movie`, {
    params: {
      with_genres: id,
    },
  });
  return response.data.results;
};

export default {
  viewsPopular,
  genrehorror
}