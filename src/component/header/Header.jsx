import { useState } from "react";
import Follow from "./Follow";
import Navigation from "./Navigation";
import Search from "./Search";
import Slider from "./Slider";

export default function Header() {
  const [img, setImg] = useState("wp4016036.jpg");
  return (
    <header
      className="bg-cover  bg-center h-auto  "
      style={{
        backgroundImage: ` linear-gradient(to bottom , rgba(0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,0.6), #1e293b ),url(${img})`,
      }}
    >
      <div>
        <Navigation />
        <div className="container">
          <Search />
          <Follow />
          <Slider setImg={setImg} />
        </div>
      </div>
    </header>
  );
}
