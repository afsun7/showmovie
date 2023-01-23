import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key, baseURL, imgbaseURL } from "../apiconfig";
import MovieCard from "./MovieCard";

export default function Movie() {
  const [movie, setmovie] = useState();
  const { id } = useParams();
  async function getMovie() {
    const { data } = await axios.get(
      `${baseURL}/movie/${id}?api_key=${api_key}`
    );

    setmovie(data);
  }
  useEffect(() => {
    getMovie();
  }, [id]);

  console.log(movie);
  return (
    <div className="container ">
      {movie && (
        <div className="flex mt-4">
          <div className="w-screen  lg:w-2/4 ">
            <img
              src={`${imgbaseURL}/w500${movie.poster_path}`}
              alt=""
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col ml-4 gap-2">
            <h1 className=" mt-10 text-2xl ">{movie.title}</h1>
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
      )}
    </div>
  );
}
