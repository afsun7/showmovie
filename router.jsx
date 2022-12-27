import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import MovieList from "./src/component/main/MovieList";

export const router = createBrowserRouter([
  {
    element: <App />,
    Children: [
      {
        path: "/",
        element: <MovieList />,
      },
    ],
  },
]);
