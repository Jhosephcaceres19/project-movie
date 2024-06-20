import { useEffect, useState } from 'react'
import { Navbar } from '../view/navbar/Navbar'
import './News.css'
import NewsService from './service/NewsService';
import { NewsMoviesList } from './components/NewsMovieList';

export const News = () => {
  const [news, setNews] = useState([]);
  const [horror, setHorror] = useState([]);

  useEffect(() => {
    const popular = async () => {
      try{
      const news = await NewsService.viewsPopular();
      const horror =  await NewsService.genrehorror('27');
      setNews(news)
      setHorror(horror);
      }catch(error){
        console.error('la peticion fallo', error)
      }
    };
    popular();
  },[])

  return (
    <div className="app-main">
      <Navbar />
      <div className="api-app">
        <div className='flex flex-col '>
          
          <NewsMoviesList movies={news}/>
          
          <NewsMoviesList movies={horror}/>
        </div>
        
      </div>
    </div>
  );
}
