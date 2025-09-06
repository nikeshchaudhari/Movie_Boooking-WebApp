import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
const MovieSlider = () => {
  const [movieSlide, setMovieSlide] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/movies");
        setMovieSlide(res.data);
      } catch (err) {
        console.log("Something Wrong... Slider", err);
      }
    };
    fetchMovies();
  },[]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className="mb-10 overflow-hidden">
       {movieSlide.map((movie)=>(
        <div key={movie.id}>
          <img src={movie.bg} alt="" />

        </div>
       ))}
      </Slider>
    </>
  );
};

export default MovieSlider;
