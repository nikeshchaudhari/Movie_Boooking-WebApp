import axios from "axios";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowTime from "../components/ShowTime";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/movies/${id}`);
        setMovie(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (err) {
        console.log("Movies Somthing...", err);
      }
    };
    dataFetch();
  }, [id]);
  if (loading) {
    return <div>loading...</div>;
  }
  if (!movie) {
    return <div>Movie Not Found</div>;
  }
  return (
    <>
      <Navbar />
      <div
        className="w-full bg-cover bg-center h-[200px] md:h-[400px] relative overflow-hidden"
        style={{ backgroundImage: `url(${movie.bg})` }}
      >
        <div className="absolute inset-0 h-full bg-black/80"></div>
        <div className="flex  gap-5 mx-40">
          <div className="w-60  mt-5 filter brightness-100 ">
            <img src={movie.poster} alt={movie.title} />
          </div>
          <div>
            <div className="mt-10">
             <h1 className="text-3xl font-bold mb-2 text-white filter brightness-100">{movie.title}</h1>
          </div>
          <div className="flex gap-5 mb-3">
            <div className="bg-black/70 p-1 text-center rounded-3xl w-20 text-white filter brightness-100 ">
                <h3 className="mx-auto">{movie.quality}</h3>
            </div>
            <div className="bg-black/70 p-1 text-center rounded-3xl w-20 text-white filter brightness-100 ">
                <h3 className="mx-auto">{movie.language }</h3>
            </div>
            <div className="bg-red-600 p-1 text-center rounded-3xl w-30 text-white filter brightness-100 cursor-pointer ">
                <h3 className="mx-auto">play Trailer</h3>
            </div>
          </div>
          <div className=" ">
            <p className="text-white filter brightness-100">{movie.genre}</p>
            <p className="text-white filter brightness-100">{movie.showDate}</p>
          </div>
          </div>
        </div>
      </div>
      <ShowTime/>
    </>
  );
};

export default MovieDetail;
