import { data } from "autoprefixer";
import api from "../../api/api";
import { resolveObjectURL } from "buffer";

const viewSeriesPopular = async()=>{
  const response = await api.get('/tv/popular')
  return response.data.results;
}
const detailSerie = async(id) =>{
  const response =  await api.get(`/tv/${id}`)
  return response.data;
}

const genresfamily = async (id) => {
  const response = await api.get(`/discover/tv`, {
    params: {
      with_genres: id,
    },
  });
  return response.data.results;
};
const genreskids = async (id) => {
  const response = await api.get(`/discover/tv`, {
    params: {
      with_genres: id,
      page:3
    },
  });
  return response.data.results;
};
const genresanimation = async(id) => {
  const response = await api.get(`/discover/tv`,{
    params:{
      with_genres: id,
      page:2
    },
  })
  return response.data.results;
}
const genrescrime = async(id)=>{
  const response = await api.get(`/discover/tv`,{
    params:{
      with_genres:id,
    },
  });
  return response.data.results;
}
const searchSerie = async(query) =>{
  const response = await api.get(`/search/tv`,{
    params:{
      query:query
    }
  })
  return response.data;
}



export default{
  viewSeriesPopular,
  detailSerie,
  searchSerie,
  genresfamily,
  genreskids,
  genresanimation,
  genrescrime
};