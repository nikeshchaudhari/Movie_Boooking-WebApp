import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setSelectDate } from "../feature/movie/movieSlice";
import axios from "axios";
import MovieCard from "./MovieCard";

const Onshowing = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState([]);
  const [selected, setSelected] = useState("");
  const movies = useSelector((state) => state.movies.filterMovies);

  useEffect(() => {
    const today = new Date();
    // console.log(today);
    const numDays = 7;
    const dDate = [];

    // console.log(dDate);

    for (let i = 0; i < numDays; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      let day = "";
      if (i === 0) {
        day = "Today";
      } else if (i === 1) {
        day = "Tomorrow";
      } else {
        day = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }
      dDate.push({ day, value: d.toISOString().split("T")[0] });

      // console.log(day);
    }
    setDate(dDate);
    // setSelected(dDate[0].value);
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/movies");
        dispatch(setMovies(res.data));
        dispatch(setSelectDate(dDate[0].value));
        setSelected(dDate[0].value);
        // console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <>
      <h1 className="text-black text-center bg-white text-[25px] font-bold">
        Now Showing
      </h1>
      <div className="w-full p-2">
        <div className="  md:mx-2 flex justify-center  gap-3 mt-5 flex-wrap ">
          {date.map((d) => (
            <button
              key={d.value}
              className={`bg-red px-4 md:py-1.5 md:px-6 mb-3 cursor-pointer ${
                selected === d.value
                  ? "bg-red-800 text-white rounded-lg"
                  : "border border-black text-black rounded-lg"
              }`}
              onClick={() => {
                dispatch(setSelectDate(d.value));
                setSelected(d.value);
              }}
            >
              {d.day}
            </button>
          ))}
        </div>
      </div>
      {/* Movie list */}

      <div className="w-full grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center bg-white py-2">
        {movies.length > 0 ? (
          movies.map((m) => (
            <div key={m.id}>
              <MovieCard movies={m}  />
            </div>
          ))
        ) : (
          <div className="col-span-full  grid place-items-center">
            <p className="text-black text-lg font-semibold">
              No Movies Available
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Onshowing;
