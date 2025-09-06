  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
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
      <div className="mx-auto  overflow-x-hidden">
        <Slider {...settings} className="mb-10">
          {movieSlide.map((movie) => (
            <div key={movie.id} >
              <img
                src={movie.bg} 
                alt={movie.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      </>
    );
  };

  export default MovieSlider;
