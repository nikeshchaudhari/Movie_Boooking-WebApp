import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShowTime from "../components/ShowTime";
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const [isSize, setIsSize] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleSize = () => {
      setIsSize(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/movies/${id}`);
        setMovie(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Something Wrong...");
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      {isSize ? (
        <div className="relative w-full  bg-cover ">
          <img
            src={movie.bg}
            alt={movie.title}
            className="w-full  bg-cover h-90"
          />
          <div className="absolute inset-0 bg-black/75 "></div>
          <div className="absolute top-0 left-60 flex">
            <div className="w-60">
              <img src={movie.poster} alt="" />
            </div>
            <div>
              <h1 className="text-white text-[40px] ml-10 font-semibold mb-3">
                {movie.title}
              </h1>
              <div>
                <span className="bg-gray-800 text-white px-5 py-1 rounded-4xl ml-10 ">
                  {movie.quality}
                </span>
                <span className="bg-gray-800 text-white px-5 py-1 rounded-4xl ml-5 ">
                  {movie.language}
                </span>
                <span className="bg-red-500 text-white px-5 py-1 rounded-4xl ml-5 ">
                  Play Trailer
                </span>
              </div>
              <p className="text-white ml-10 mt-5 ">{movie.genre}</p>
              <p className="text-white ml-10  ">{movie.showDate}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-black w-screen min-h-20  flex items-center text-white">
            <h1 className="font-semibold text-3xl ml-5">{movie.title}</h1>
          </div>
          <div className="mt-5 flex justify-center">
            <span className="bg-gray-800 text-white px-5 py-1 rounded-4xl  ">
              {movie.quality}
            </span>
            <span className="bg-gray-800 text-white px-5 py-1 rounded-4xl ml-5 ">
              {movie.language}
            </span>
            <span className="bg-red-500 text-white px-5 py-1 rounded-4xl ml-5 ">
              Play Trailer
            </span>
          </div>
            <div className="flex justify-center">
             <div className="w-50 ">
               <p className="text-black ml-10 mt-5 ">{movie.genre}</p>
              <p className="text-black ml-10  ">{movie.showDate}</p>
             </div>
            </div>
          
        </>
      )}
      <ShowTime/>
    </>
    
  );
};

export default MovieDetail;
