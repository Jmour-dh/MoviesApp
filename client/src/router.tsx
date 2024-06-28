import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Home = lazy(()=>import("./views/Home"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);