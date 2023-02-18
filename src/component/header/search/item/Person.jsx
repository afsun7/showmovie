import { Link } from "react-router-dom";
import { imgbaseURL } from "../../../apiconfig";
import MovieCard from "../../../main/MovieCard";

export default function Person({ item }) {
  return (
    <Link to={`/people/${item.id}`}>
      <div className=" h-48 mt-4 border-solid border-2 border-slate-500 rounded-l-xl ">
        <MovieCard
          original_title={item.name}
          src={
            item.profile_path
              ? ` ${imgbaseURL}/w500${item.profile_path}`
              : `/no-img.png`
          }
          vote={item.popularity}
          backdrop={item.profile_path}
          id={item.id}
        />
       
      </div>
    </Link>
  );
}
