import { Link, useLocation, useParams } from "react-router-dom";
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
  const location = useLocation();
  return (
    <>
      <div
        className={`flex  items-start aspect-[2/4] ${
          location.pathname === "/" ? `flex-col` : `flex-row `
        }`}
        style={{ width: `${w}` }}
      >
        <img
          src={src}
          alt=""
          className={`rounded-xl ${location.pathname === "/search" && `w-28`}`}
          onMouseOver={(e) => setImg(`${imgbaseURL}/w500${backdrop}`)}
        />

        <div className={` ml-2  ${location.pathname === "/search" ?`mt-4`:`-mt-4`} `}>
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
