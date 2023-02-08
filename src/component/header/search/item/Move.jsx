import { imgbaseURL } from "../../../apiconfig";
import MovieCard from "../../../main/MovieCard";

export default function Movie({ item }) {
  return (
    <div className=" h-48 mt-4 border-solid border-2 border-slate-500 rounded-l-xl 	">
      <MovieCard
        original_title={item.original_title}
        src={`${imgbaseURL}/w500${item.poster_path}`}
        vote={item.vote_average}
        backdrop={item.backdrop_path}
        id={item.id}
      />
    </div>
  );
}
