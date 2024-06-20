import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { TvSeries } from "../tv/TvSeries"
import { Movie } from "../movie/Movie"
import { News } from "../news/News"

const Routes = () =>{
  const routeForPublic = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/serie",
      element: <TvSeries />,
    },
    {
      path: "/pelicula",
      element: <Movie />,
    },
    {
      path: "/news",
      element: <News />,
    },
  ];

  const router = createBrowserRouter(routeForPublic);
  return <RouterProvider router={router}/>;
}
export default Routes