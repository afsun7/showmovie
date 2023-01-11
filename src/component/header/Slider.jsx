import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { api_key, baseURL, imgbaseURL } from "../apiconfig";

import MovieCard from "../main/MovieCard";

export default function Slider({ setImg }) {
  const [movies, setmovies] = useState([]);
  async function loadMovies() {
    const { data } = await axios.get(
      `${baseURL}/movie/popular?api_key=${api_key}`
    );
    setmovies(data.results);
  }
  console.log(movies);
  useEffect(() => {
    loadMovies();
  }, []);
  return (
    <div className="mt-6">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop
        autoplay={{
          delay: 2000,
          autoplayPause: true,
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              original_title={movie.original_title}
              src={`${imgbaseURL}/w500${movie.poster_path}`}
              vote={movie.vote_average}
              setImg={setImg}
              backdrop={movie.backdrop_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
}
