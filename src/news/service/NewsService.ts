import api from "../../api/api";

const viewsPopular = async () =>{
  const response = await api.get('/movie/top_rated');
  console.log(response.data.results)
  return response.data.results
}
const viewsPopularone = async () => {
  const response = await api.get(`/movie/top_rated`,{
    params:{
      page:2
    }
  });
  console.log(response.data.results);
  return response.data.results;
};
const viewsPopulartwo = async () => {
  const response = await api.get(`/movie/top_rated`,{
    params:{
      page:3
    }
  });
  console.log(response.data.results);
  return response.data.results;
};
const viewsPopulartree = async () => {
  const response = await api.get(`/movie/top_rated`,{
    params:{
      page:4
    }
  });
  console.log(response.data.results);
  return response.data.results;
};
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
  genrehorror,
  viewsPopularone,
  viewsPopulartwo,
  viewsPopulartree
}