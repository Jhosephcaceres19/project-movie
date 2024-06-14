import path from "path"
import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { TvSeries } from "../tv/TvSeries"
import { Movie } from "../movie/Movie"

const Routes = () =>{
  const routeForPublic = [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/serie',
      element:<TvSeries/>
    },
    {
      path:'/pelicula',
      element:<Movie/>
    },
  ]

  const router = createBrowserRouter(routeForPublic);
  return <RouterProvider router={router}/>;
}
export default Routes