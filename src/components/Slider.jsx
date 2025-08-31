import React, { useEffect, useState } from "react";
import mohar from "../assets/mohar.jpg";
import magne from "../assets/magne.jpg";
import level2 from "../assets/level2.jpg";
import { Link } from "react-router-dom";




const Slider = () => {
  const slider = [
    { id: 1, title: "mohar", imageUrl: mohar },
    { id: 2, title: "magne", imageUrl: magne },
    { id: 3, title: "level2", imageUrl: level2 },
  ];
// const[current,setCurrent]= useState(0)

// useEffect(()=>{
//     const timer = setInterval(() => {
//         setCurrent((prev)=> prev===slider.length -1 ? 0 :prev+1)
//     }, 2000);
//     return ()=> clearInterval(timer)
// },[slider.length])
  return <>
 <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={mohar}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <Link to="#slide4" className="btn btn-circle">❮</Link>
    <Link to="#slide2" className="btn btn-circle">❯</Link>
      {/* <a href="" className="btn btn-circle"></a> */}
      {/* <a href="#slide2" className="btn btn-circle"></a> */}
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={magne}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={level2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
  </>;
};

export default Slider;
