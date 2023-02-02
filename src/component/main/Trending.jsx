import { Radio } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api_key, baseURL, imgbaseURL } from "../apiconfig";
import MovieCard from "./MovieCard";

export default function Trending({ setImg }) {
  const [value, setvalue] = useState("movie");
  const [trending, setTrending] = useState([]);

  let mediatype = "movie";
  switch (value) {
    case "movie":
      mediatype = "movie";

      break;
    case "tv":
      mediatype = "tv";

      break;
  }
  async function gettrending() {
    const { data } = await axios.get(
      `${baseURL}/trending/${mediatype}/day?api_key=${api_key}`
    );
    setTrending(data.results);
  }

  useEffect(() => {
    gettrending();
  }, [mediatype]);
  
  return (
    <div className="container">
      <div className="flex my-8">
        <h1 className="text-2xl mr-4 ">Trending </h1>
        <Radio.Group defaultValue="movie" buttonStyle="solid">
          <Radio.Button value="movie" onClick={(e) => setvalue(e.target.value)}>
            movies
          </Radio.Button>
          <Radio.Button value="tv" onClick={(e) => setvalue(e.target.value)}>
            On TV
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="flex gap-4 overflow-x-auto  mt-4  ">
        {trending.map((movie) => (
          <div className="w-screen">
            <Link to={`/${mediatype}/${movie.id}`}>
              <MovieCard
                original_title={movie.title}
                src={`${imgbaseURL}/w500${movie.poster_path}`}
                vote={movie.vote_average}
                w="11vw"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
