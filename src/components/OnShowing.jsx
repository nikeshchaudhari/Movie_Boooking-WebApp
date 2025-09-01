import React, { useEffect, useState } from "react";

const Onshowing = () => {
  const [date, setDate] = useState([]);
  const [selected, setSelected] = useState("");

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
    setSelected(dDate[0].value);
  }, []);

  return (
    <>
      <h1 className="text-white text-center mt-3 text-[25px] font-bold">
        Now Showing
      </h1>
      <div className="mx-2 flex justify-center gap-3 mt-5 ">
        {date.map((d)=>(
          <button key={d.value} className={`bg-red py-1.5 px-6 mb-20 cursor-pointer ${
          selected === d.value ? "bg-red-800 text-white rounded-lg"
                : "border border-white text-white rounded-lg" }`}
              onClick={()=>setSelected(d.value)}
                >
            {d.day}
            
          </button>
        ))}
      </div>
    </>
  );
};

export default Onshowing;
