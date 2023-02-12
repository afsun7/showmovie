import { Switch } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { api_key, baseURL } from "../../apiconfig";
import Movie from "./item/Move";
import Person from "./item/Person";
import Tv from "./item/Tv";

export default function Search() {
  const [loadin, setloading] = useState(true);
  const [query, setquery] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  async function serach() {
    if (query) {
      try {
        const { data } = await axios.get(
          `${baseURL}/search/multi?api_key=${api_key}&query=${query}`
        );
        setsearchResult(data.results);
      } catch {
        setloading(false);
      }
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      serach();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query]);

  function showItem(item) {
 
    switch (item.media_type) {
      case "person":
        return <Person key={item.id} item={item} />;
      case "movie":
        return <Movie key={item.id} item={item} />;
      case "tv":
        return <Tv key={item.id} item={item} />;
    }
  }
  return (
    <>
      {loadin ? (
        <section className=" mt-8 container">
          <input
            placeholder="search movie"
            type="text"
            className="w-full p-2 text-2xl bg-slate-600 border-slate-900 border-4 rounded-lg outline-none text-slate-300  placeholder:text-slate-500 placeholder:text-base"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          ></input>
          {searchResult.map(showItem)}
        </section>
      ) : (
        <div className="h-[30rem] flex">
          <div className="w-16 m-auto  ">
            <img src="/public/loading-loading-forever.gif" />
          </div>
        </div>
      )}
    </>
  );
}
