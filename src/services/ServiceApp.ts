import api from "../api/api"

const viewAllNow = async()=>{
    const response = await api.get('/movie/now_playing')
    return response.data.results;
}
const viewAll = async()=>{
    const response = await api.get(`/movie/popular`,{
        params:{
            page:2
        }
    })
    return response.data.results;
}
const latest = async()=>{
    const response = await api.get('/trending/all/day')
    console.log(response.data.results);
    return response.data.results;
}
export default{
    viewAll,
    viewAllNow,
    latest
}