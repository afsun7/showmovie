import { Link } from "react-router-dom";
import { imgbaseURL } from "../../../apiconfig";
import MovieCard from "../../../main/MovieCard";

export default function Tv({ item }) {
  return (
    <Link to={`tv/${item.id}`}>
      <div className=" h-48 mt-4 border-solid border-2 border-slate-500 rounded-l-xl 	">
        {console.log(item)}
        <MovieCard
          original_title={item.original_name}
          src={
            item.poster_path
              ? `${imgbaseURL}/w500${item.poster_path}`
              : `/no-img.png`
          }
          vote={item.vote_average}
          backdrop={item.poster_path}
          overview={item.overview}
          id={item.id}
        />
      </div>
    </Link>
  );
}
