import React from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const ShowTime = () => {
  return (
    <>
    <section className="bg-[##fff]/50 mt-5">
        <div>
          <ul>
            <li><span className="bg-amber-500 w-5 h-5"></span>Available</li>
            <li><span></span>Booked</li>
            <li><span></span>Sold Out</li>
            <li><span></span>Not Available</li>
          </ul>
        </div>
    </section>
    </>
  );
};

export default ShowTime;
