import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import LogIn from "./src/component/main/LogIn";
import Movie from "./src/component/main/Movie";
import Trending from "./src/component/main/Trending";
import Freewatch from "./src/component/main/Trending";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Trending />,
      },
      {
        path: "/movie",
        element: <h1>this is movie</h1>,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/tv",
        element: <h1>this is tv</h1>,
      },

      {
        path: "/people",
        element: <h1>this is people</h1>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);
