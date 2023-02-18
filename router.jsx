import { createBrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext";
import App from "./src/App";
import Search from "./src/component/header/search/Search";

import LogIn from "./src/component/main/LogIn";
import Movie from "./src/component/main/Movie";
import Movies from "./src/component/main/Movies";
import Profile from "./src/component/main/Profile";
import Trending from "./src/component/main/Trending";

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
        path: "/:media_type/:movieId",
        element: <Movie />,
      },

      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      { path: "get/:type/:categorie", element: <Movies /> },
    ],
  },
]);
