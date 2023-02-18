import { Link, useLocation, useParams } from "react-router-dom";
import { imgbaseURL } from "../apiconfig";

export default function MovieCard({
  original_title,
  src,
  vote,
  setImg,
  backdrop,
  id,
  overview,
  w,
}) {
  const location = useLocation();
  return (
    <>
      <div
        className={`flex  items-start aspect-[2/4] ${
          location.pathname === "/search" ? `flex-row` : `flex-col`
        } `}
        style={{ width: `${w}` }}
      >
        <img
          src={src}
          className={`rounded-md   ${
            location.pathname === "/search" &&
            ` w-[7.83rem] h-[11.8rem] 	object-fit: cover -z-10  `
          }`}
          onMouseOver={(e) => setImg(`${imgbaseURL}/w500/${backdrop}`)}
        />

        <div
          className={` ml-2  ${
            location.pathname === "/search" ? `mt-4` : `-mt-4`
          } `}
        >
          <div className="chart ml-0" style={{ "--value": `${vote * 10}%` }}>
            <div className="inner text-xs bg-slate-800 ">{`${Math.round(
              vote * 10
            )}%`}</div>
          </div>
          <div className="-mt-4 font-sans font-thin ">{original_title}</div>
          {location.pathname === "/search" && (
            <div className=" text-xs font-thin mt-4  text-overview ">
              {overview}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
