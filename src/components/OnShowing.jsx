import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setSelectDate } from "../feature/movie/movieSlice";

const Onshowing = () => {
  const dispatch = useDispatch();
  const [date, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(""); 

  const movies = useSelector((state)=>state.movies.filterMovies);

  useEffect(() => {
    const today = new Date();
    const numDays = 7;
    const tempDates = [];

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

      tempDates.push({ day, value: d.toISOString().split("T")[0] });
    }

    setDates(tempDates);
    setSelectedDate(tempDates[0].value);       
    dispatch(setSelectDate(tempDates[0].value)); 
  }, [dispatch]);

  return (
    <>
      <h1 className="text-white text-center font-semibold text-[30px] mt-5">Now Showing</h1>
      <div className="flex justify-center mt-5">
        {date.map((d)=>(
          <button key={d.value} className={`p-5  py-2 mx-2  ${selectedDate===d.value ? "bg-red-800 text-white rounded-lg cursor-pointer": " border border-white rounded-lg text-white cursor-pointer"}`} onClick={()=>{
            setSelectDate(d.value);
            dispatch(setSelectedDate(d.value))
          }}>
            {d.day}
          </button>
        ))}
      </div>
      </>
  );
};

export default Onshowing;
