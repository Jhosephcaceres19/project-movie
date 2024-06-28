import api from "../../api/api";

const viewSeriesPopular = async()=>{
  const response = await api.get('/tv/top_rated')
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
const viewVideo = async (id) =>{
  const response = await api.get(`/tv/${id}/videos`)
  console.log('esto son los videos',response.data.results)
  return response.data.results[0]
}



export default{
  viewSeriesPopular,
  detailSerie,
  searchSerie,
  genresfamily,
  genreskids,
  genresanimation,
  genrescrime,
  viewVideo
};