import { useEffect, useState } from 'react'
import { Navbar } from '../view/navbar/Navbar'
import './News.css'
import NewsService from './service/NewsService';
import { NewsMoviesList } from './components/NewsMovieList';

export const News = () => {
  const [news, setNews] = useState([]);
  const [horror, setHorror] = useState([]);
  const [newsone, setNewsone] =useState([]);
  const [newstwo, setNewstwo]= useState([]);
  const [newstree, setNewstree]= useState([]);

  useEffect(() => {
    const popular = async () => {
      try{
      const news = await NewsService.viewsPopular();
      const horror =  await NewsService.genrehorror('27');
      const newsone = await NewsService.viewsPopularone();
      const newstwo = await NewsService.viewsPopulartwo();
      const newstree = await NewsService.viewsPopulartree();
      setNews(news)
      setNewsone(newsone)
      setNewstwo(newstwo)
      setNewstree(newstree)
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
          <NewsMoviesList movies={newsone}/>
          <NewsMoviesList movies={newstwo}/>
          <NewsMoviesList movies={newstree}/>
          <NewsMoviesList movies={horror}/>
        </div>
        
      </div>
    </div>
  );
}
