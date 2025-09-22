import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Seat from "../components/Seat";

const SeatBook = () => {
  const movie = useSelector((state) => state.movies.selectMovie);
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-black text-white h-[150px] w-full">
          {movie ? (
            <>
              <div className="mx-5 md:mx-20 py-5">
                <h1 className="text-[30px] font-bold">{movie.title}</h1>
                <h1>{movie.genre}</h1>
                <span>{movie.showDate}</span>
              </div>
            </>
          ) : (
            <p>No movie selected</p>
          )}
        </div>
        <Seat/>
      </div>
    </>
  );
};

export default SeatBook;
