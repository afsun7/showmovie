import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const menuItems = [
  { path: "/movie", text: "movies" },
  { path: "/tv", text: "tv Shows" },
  { path: "/people", text: "people" },
];

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const user = useContext(UserContext);

  function activeClass({ isActive }) {
    return isActive ? "text-rose-500" : "hover:text-slate-200";
  }

  return (
    <>
      <nav className="bg-slate-900  flex items-center  bg-none  justify-between -mt-6  pb-4 pt-10 p-4   md:bg-transparent md:mt-0 md:pt-12 md:container">
        <div className="flex  justify-between items-center ">
          <Link to="/">
            <h1 className=" text-2xl  lg:mr-14 lg:text-4xl ">
              <span className="text-rose-500">H</span>yper
              <span className="text-rose-500">M</span>ovies
            </h1>
          </Link>
        </div>
        <ul className=" hidden md:flex m-auto gap-6 uppercase text-sm  ">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`${item.path}`}
                className={activeClass}
              >{`${item.text.toUpperCase()}`}</NavLink>
            </li>
          ))}
        </ul>
        <div className="text-sm uppercase ml-auto">
          <ul className=" flex items-center gap-2 md:gap-3 text-sm md:text-xl lg:gap-6">
            {user.user ? (
              <li>
                <NavLink
                  to="/profile"
                  className="bg-rose-700 px-3 py-2 rounded-xl text-white hover:bg-rose-600 lg:px-6 lg:py-2 "
                >
                  {user.user.name}
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sign up"
                    className="bg-rose-700 px-3 py-2 rounded-xl text-white hover:bg-rose-600 lg:px-6 lg:py-2 "
                  >
                    Sign up
                  </NavLink>
                </li>
              </>
            )}

            <li className="md:hidden">
              <div>
                <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {isOpenMenu && (
        <div className="bg-slate-900 border-t-2 border-slate-700 text-slate-300 -mx-40  py-4 text-center  md:hidden">
          <ul className="flex flex-col gap-4 ">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`${item.path}`}
                  className={activeClass}
                  onClick={() => setIsOpenMenu(false)}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
