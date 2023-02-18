import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key, baseURL, imgbaseURL } from "../apiconfig";
import { HeartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-hot-toast";

export default function Movie() {
  const [movie, setmovie] = useState();
  const { media_type, movieId } = useParams();
  const { user, session } = useContext(UserContext);

  async function getMovie() {
    const { data } = await axios.get(
      `${baseURL}/${media_type}/${movieId}?api_key=${api_key}`
    );

    setmovie(data);
  }
  useEffect(() => {
    getMovie();
  }, [movieId]);

  async function handelAddfavorite() {
    const { data } = await axios.post(
      `${baseURL}/account/${user.id}/favorite?api_key=${api_key}&session_id=${session}`,
      {
        media_type: media_type,
        media_id: movieId,
        favorite: true,
      }
    );
    toast.success(`${movie.title} has been added to your favorites`);
  }

  return (
    <div className="container ">
      {movie ? (
        <div className="flex justify-center items-center content-center flex-col mt-4 md:flex-row">
          <div className="w-[300px] h-[450px] object-cover">
            <img
              src={`${imgbaseURL}/w500${movie.poster_path}`}
              alt=""
              className="w-full h-full  rounded-lg"
            />
          </div>
          <div className="w-[300px] flex flex-col ml-8 gap-2 lg:w-2/3">
            <h1 className=" mt-10 text-[36px] ">{movie.title}</h1>

            <button className="mr-auto mb-4" onClick={handelAddfavorite}>
              <HeartOutlined className="text-2xl" />
            </button>
            <div
              className="chart "
              style={{ "--value": `${movie.vote_average * 10}%` }}
            >
              <div className="inner text-xs bg-slate-800 ">
                {`${Math.round(movie.vote_average * 10)}%`}
              </div>
            </div>
            <span className="text-lg -mt-6">Overview</span>
            <span className="text-[12px]">{movie.overview}</span>
          </div>
        </div>
      ) : (
        <div className="w-16 m-auto ">
          <img src="/public/loading-loading-forever.gif" />
        </div>
      )}
    </div>
  );
}
