import { imgbaseURL } from "../../../apiconfig";
import MovieCard from "../../../main/MovieCard";

export default function Person({ item }) {
  return (
    <div className=" h-48 mt-4 ">
      {console.log(item)}
      <MovieCard
        original_title={item.name}
        src={`${imgbaseURL}/w500${item.profile_path}`}
        vote={item.popularity}
        backdrop={item.profile_path}
        id={item.id}
      />
    </div>
  );
}
