import { Link, useParams } from "react-router-dom";
import { imgbaseURL } from "../apiconfig";

export default function MovieCard({
  original_title,
  src,
  vote,
  setImg,
  backdrop,
  id,
  w,
}) {
  return (
    <>
      <div
        className="flex  flex-col items-start aspect-[2/4] "
        style={{ width: `${w}` }}
      >
        <img
          src={src}
          alt=""
          className="rounded-xl"
          onMouseOver={(e) => setImg(`${imgbaseURL}/w500${backdrop}`)}
        />

        <div className="-mt-4 ml-2 ">
          <div className="chart ml-0" style={{ "--value": `${vote * 10}%` }}>
            <div className="inner text-xs bg-slate-800 ">{`${Math.round(
              vote * 10
            )}%`}</div>
          </div>
          <div className="-mt-4 font-sans font-thin ">{original_title}</div>
        </div>
      </div>
    </>
  );
}
