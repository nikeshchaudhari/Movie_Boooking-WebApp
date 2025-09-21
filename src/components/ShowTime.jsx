import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectDate } from "../feature/movie/movieSlice";
const ShowTime = () => {
  const dispatch = useDispatch()
  const dateSelect = useSelector((state)=>state.movies)
  const [date, setDate] = useState([]);
  // const [selectDate, setSelectDate] = useState("");
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
    setDate(dDate)

   if(dDate.length>0){
    dispatch(setSelectDate(dDate[0].value))
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

      <div className=" w-full h-50 mt-5">
        <div className=" shadow-2xl w-[90vw] h-50 mx-auto flex justify-between p-5">
          <h1 className="text-[30px] mx-5 font-bold  ">Show Times</h1>
          <div className="flex gap-3">
            {date.map((d)=>(
            <div key={d.day}>
              <button className="hover:text-red-600 cursor-pointer hover:duration-300" onClick={()=>console.log(d.day)
              }>{d.day}</button>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTime;
