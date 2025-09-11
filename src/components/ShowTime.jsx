import React, { useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { NavLink } from "react-router-dom";
const ShowTime = () => {
  const [date, setDate] = useState([]);
  const [selectDate, setSelectDate] = useState("");
  const [showTimeData, setShowTimeData] = useState({});
  useEffect(() => {
    const today = new Date();
    // console.log(today);
    const numDays = 3;
    const dDate = [];

    for (let i = 0; i < numDays; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      // console.log(d);

      let day = "";
      if (i == 0) {
        day = "Today";
      } else if (i == 1) {
        day = "Tommorow";
      } else {
        day = d.toLocaleDateString("en-US", { day: "numeric", month: "short" });
      }
      dDate.push({ day, value: d.toISOString().split("T")[0] });

      // console.log(day);
      // console.log(dDate);
    }

    setDate(dDate);
    setSelectDate(dDate[0].value);
    // console.log(dDate[0].value);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/movies");
        setShowTimeData(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log("Not Found Date..");
      }
    };
    fetchData();
  }, []);

  const isPast = (time) => {
    const now = new Date();
    console.log(now);
    const [t, period] = time.split(" ");
    let [hour, minutes] = t.split(":").map(Number);

    if (period === "PM" && hour !== 12) {
      hour = hour + 12;
    }
    if (period === "AM" && hour === 12) {
      hour = 0;
    }

    const showTime = newDate();
    showTime.setHours(hour, minutes, 0, 0);
    return showTime < now;
  };

  return (
    <>
      <div className="">
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
        <div className=" flex justify-center p-2 md:p-0">
          <div
            className="w-full md:w-[85vw] mt-8"
            style={{ boxShadow: " 2px 2px 25px 2px #CFCFCF" }}
          >
            <div className="flex justify-between mt-5  w-[85vw] rounded-lg p-5 ">
              <h1 className="text-[30px] font-medium">Show Times</h1>
              <div className="flex gap-4">
                {/* Date Button */}
                {date.map((d) => (
                  <div key={d.id}>
                    <button
                      onClick={() => {
                        setSelectDate(d.value);

                        console.log(d.value);
                      }}
                      className={`hover:text-[#f49836] transition hover:duration-500 cursor-pointer`}
                    >
                      {d.day}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100  md:mx-5 flex gap-5 items-center">
              <h1 className="bg-[#D9A250]  w-full md:w-[200px] md:p-2 text-white font-medium">
                MOVIES CINEMA
              </h1>
              {/* Show times */}

              <div className="flex flex-wrap gap-3 mt-3">
                {(showTimeData[selectDate] || []).map((time, idx) => {
                  const past = isPast(selectDate, time);
                  return (
                    <button
                      key={idx}
                      disabled={past}
                      className={`px-4 py-2 rounded ${
                        past
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTime;
