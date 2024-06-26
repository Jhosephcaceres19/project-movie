import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { TvSeries } from "../tv/TvSeries"
import { Movie } from "../movie/Movie"
import { News } from "../news/News"
import { Detail } from "../components/datail/Detail"
import { DetailTv } from "../tv/components/detail/DetailTv"

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
      path: "/serie/:id",
      element: <DetailTv />,
    },
    {
      path: "/pelicula",
      element: <Movie />,
    },
    {
      path: "/pelicula/:id",
      element: <Detail />,
    },
    {
      path: "/:id",
      element: <Detail />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news/:id",
      element: <Detail />,
    },
  ];

  const router = createBrowserRouter(routeForPublic);
  return <RouterProvider router={router}/>;
}
export default Routes