import api from "../api/api";

const viewAllNow = async () => {
  const response = await api.get("/movie/now_playing");
  return response.data.results;
};
const viewAll = async () => {
  const response = await api.get(`/movie/popular`, {
    params: {
      page: 2,
    },
  });
  return response.data.results;
};
const viewAllOne = async () => {
  const response = await api.get(`/movie/popular`, {
    params: {
      page: 3,
    },
  });
  return response.data.results;
};
const viewAllTwo = async () => {
  const response = await api.get(`/movie/popular`, {
    params: {
      page: 4,
    },
  });
  return response.data.results;
};
const latest = async () => {
  const response = await api.get("/trending/all/day");
  console.log(response.data.results);
  return response.data.results;
};
const viewDetail = async (id) => {
  const response = await api.get(`/movie/${id}`);
  console.log(response.data);
  return response.data;
};
const viewVideo = async (id)=>{
  const response = await api.get(`/movie/${id}/videos`)
  console.log('los videos ',response.data.results[0])
  return response.data.results[0];
}
export default {
  viewAll,
  viewAllNow,
  latest,
  viewDetail,
  viewAllOne,
  viewAllTwo,
  viewVideo
};
