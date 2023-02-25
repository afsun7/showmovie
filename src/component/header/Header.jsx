import { useState } from "react";
import { useLocation } from "react-router-dom";
import Follow from "./Follow";
import Navigation from "./Navigation";
import Search from "./search/Search";
import Slider from "./Slider";

export default function Header() {
  const [img, setImg] = useState("wp4016036.jpg");
  const location = useLocation();
  console.log(location);
  return (
    <header
      className="bg-cover  bg-center h-auto  "
      style={{
        backgroundImage: ` linear-gradient(to bottom , rgba(0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,0.6), #1e293b ),${
          location.pathname === "/" ? `url(${img}) ` : `url("")`
        }`,
      }}
    >
      <div>
        <Navigation />
        <div className="container">
          <div className={location.pathname !== "/" && "hidden "}>
            <Follow />
            {location.pathname === "/" && <Slider setImg={setImg} />}
          </div>
        </div>
      </div>
    </header>
  );
}
