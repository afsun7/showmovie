import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api_key, baseURL, imgbaseURL } from "../apiconfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "./MovieCard";

export default function Movies() {
  const { type, categorie } = useParams();
  const [movies, setmovies] = useState([]);
  async function getMovieCategorie() {
    const { data } = await axios.get(
      `${baseURL}/${type}/${categorie}?api_key=${api_key}`
    );
    setmovies(data.results);
  }
  useEffect(() => {
    getMovieCategorie();
  }, [type, categorie]);
  console.log(movies);

  return (
    <div className="container mt-6">
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
            <Link to={`/movie/${movie.id}`}>
              <MovieCard
                original_title={movie.original_title || movie.original_name}
                src={`${imgbaseURL}/w500${movie.poster_path}`}
                vote={movie.vote_average}
                backdrop={movie.backdrop_path}
                id={movie.id}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
