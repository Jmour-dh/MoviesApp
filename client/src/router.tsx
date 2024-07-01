import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Home = lazy(()=>import("./views/Home"));
const Movie = lazy(()=>import("./views/Movie"))
const Movies = lazy(()=>import("./views/Movies"))
const Series = lazy(()=>import("./views/Series"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
    ],
  },
]);