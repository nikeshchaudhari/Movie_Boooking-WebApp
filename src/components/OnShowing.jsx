import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies,setSelectDate } from "../feature/movie/movieSlice";
import axios from "axios";
import MovieCard from "./MovieCard";

const Onshowing = () => {
  const dispatch = useDispatch()
  const [date, setDate] = useState([]);
  const [selected, setSelected] = useState("");
  const movies = useSelector((state)=>state.movies.filterMovies);

  useEffect(() => {
    const today = new Date();
    // console.log(today);
    const numDays = 7;
    const dDate = [];

    console.log(dDate);

    for (let i = 0; i < numDays; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      let day = "";
      if (i === 0) {
        day = "Today";
      } else if (i === 1) {
        day = "Tomorrow";
      } else {
       day=  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }
      dDate.push({ day, value: d.toISOString().split("T")[0] });

      console.log(day);
    }
    setDate(dDate);
    // setSelected(dDate[0].value);
    const fetchMovies = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/movies");
        dispatch(setMovies(res.data))
        dispatch(setSelectDate(dDate[0].value))
        setSelected(dDate[0].value)
        console.log(res.data);
        

      }
      catch(err){
           console.error(err);

      }
    };
    fetchMovies()
  }, [dispatch]);

  return (
    <>
      <h1 className="text-white text-center mt-3 text-[25px] font-bold">
        Now Showing
      </h1>
      <div className="w-full p-2">
        <div className= "  md:mx-2 flex justify-center  gap-3 mt-5 flex-wrap ">
        {date.map((d)=>(
          <button key={d.value} className={`bg-red px-4 md:py-1.5 md:px-6 md:mb-20 cursor-pointer ${
          selected === d.value ? "bg-red-800 text-white rounded-lg"
                : "border border-white text-white rounded-lg" }`}
              onClick={()=>{dispatch(setSelectDate(d.value))
                setSelected(d.value)
              }}
              
                >
            {d.day}
            
          </button>
        ))}
      </div>
      </div>
      {/* Movie list */}

      <div>
        {movies.length>0 ?(
          movies.map((m)=>(
           <div>
            <MovieCard movies={m} key={m.id}/>
           </div>
          ))
        ):(

          <p className="text-white">No Movies Available</p>
        )}
      </div>
    </>
  );
};

export default Onshowing;
