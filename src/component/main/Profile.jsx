import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { imgbaseURL } from "../apiconfig";

export default function Profile() {
  const { user, session } = useContext(UserContext);

  //if doesn't exit session page profile doesn't show
  return session ? (
    <div className="container mt-20 ">
      <div className="flex flex-col gap-4  justify-items-center  items-center lg:flex lg:flex-row lg:items-start">
        <div className=" h-[700px] bg-slate-900 border-2 border-solid border-gray-500 rounded-lg w-3/4  flex flex-col gap-6 justify-items-center content-center items-center lg:w-1/4">
          {user && (
            <>
              <div className="mt-6 w-40 h-40 bg-slate-600 rounded-full ">
                {user.avatar.tmdb.avatar_path ? (
                  <img
                    src={`${imgbaseURL}/w500/${user.avatar.tmdb.avatar_path}`}
                    className="w-full h-full rounded-full overflow-clip "
                  />
                ) : (
                  <h1>{user.username.charAt(0)}</h1>
                )}
              </div>
              <h1 className=" text-2xl">{user.username || user.name}</h1>
            </>
          )}
        </div>
        <div className=" w-3/4 h-40 bg-slate-900 rounded-lg"></div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
