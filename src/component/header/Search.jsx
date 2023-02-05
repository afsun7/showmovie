import axios from "axios";
import { useEffect, useState } from "react";
import { api_key, baseURL } from "../apiconfig";

export default function Search() {
  const [query, setquery] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  async function serach() {
    if (query) {
      const { data } = await axios.get(
        `${baseURL}/search/multi?api_key=${api_key}&query=${query}`
      );
      console.log(data.results);
      setsearchResult(data.results);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      serach();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query]);
  return (
    <section className=" mt-8 container">
      <input
        placeholder="search movie"
        type="text"
        className="w-full p-2 text-2xl bg-slate-600 border-slate-900 border-4 rounded-lg outline-none text-slate-300  placeholder:text-slate-500 placeholder:text-base"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      ></input>
    </section>
  );
}
