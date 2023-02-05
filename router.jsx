import { createBrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext";
import App from "./src/App";
import Search from "./src/component/header/Search";
import LogIn from "./src/component/main/LogIn";
import Movie from "./src/component/main/Movie";
import Trending from "./src/component/main/Trending";
import Freewatch from "./src/component/main/Trending";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
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
        path: "/:media_type/:movieId",
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
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
