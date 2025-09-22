import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectDate } from "../feature/movie/movieSlice";
const ShowTime = () => {
  const dispatch = useDispatch();
  // const dateSelect = useSelector((state) => state.movies);
  const [date, setDate] = useState([]);
  const selectDate = useSelector((state) => state.movies.selectDate);
  const movie = useSelector((state) => state.movies.selectMovie);
  useEffect(() => {
    const today = new Date();
    // console.log(today);
    const numDays = 3;
    const dDate = [];

    for (let i = 0; i < numDays; i++) {
      const d = new Date();
      // console.log(d);
      d.setDate(today.getDate() + i);

      let day = "";
      if (i === 0) {
        day = "Today";
      } else if (i === 1) {
        day = "Tomorrow";
      } else {
        day = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }
      // console.log(day);
      dDate.push({ day, value: d.toISOString().split("T")[0] });
    }
    // console.log(dDate[0]);
    setDate(dDate);

    if (dDate.length > 0) {
      dispatch(setSelectDate(dDate[0].value));
    }
  }, [dispatch]);

  return (
    <>
      <div>
        <section className="bg-[##fff]/50  ">
          <div>
            <div className="flex justify-center items-center flex-wrap mt-10">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#00b5a1"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 className="mr-5">Available</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#f49836"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 className="mr-5">Booked</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#e71515"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 className="mr-5">Sold Out</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#F8F8F8"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 className="mr-5">Not Available</h2>
            </div>
          </div>
        </section>
      </div>
      {/* Show time */}

      <div className="shadow-2xl w-[90vw] mx-auto  h-full mt-5">
        <div className="   flex justify-between p-5">
          <h1 className="md:text-[30px] md:mx-5 font-bold  ">Show Times</h1>
          <div className="flex gap-3 ">
            {date.map((d) => (
              <div key={d.day}>
                <button
                  className="hover:text-red-600 cursor-pointer hover:duration-300"
                  onClick={() => dispatch(setSelectDate(d.value))}
                >
                  {d.day}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Show Time */}

        <div className="flex justify-center gap-3 md:p-5">
          {movie && movie.showDate === selectDate ? (
            movie.showTime.map((time, index) => (
              <div
                key={index}
                className="bg-[#00b5a1] hover:bg-[#0b7064] hover:duration-500 cursor-pointer text-white text-center  md:px-5  md:py-2 rounded"
              >
                {time}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No showtimes available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowTime;
