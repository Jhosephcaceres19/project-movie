import api from "../../api/api";

const viewSeriesPopular = async()=>{
  const response = await api.get('/tv/popular')
  return response.data.results;
}
const detailSerie = async(id) =>{
  const response =  await api.get(`/tv/${id}`)
  return response.data;
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
  searchSerie
};