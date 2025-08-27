import React, { useEffect, useState } from "react";
import mohar from "../assets/mohar.jpg";
import magne from "../assets/magne.jpg";
import level2 from "../assets/level2.jpg";
const Slider = () => {
  const slider = [
    { id: 1, title: "mohar", imageUrl: mohar },
    { id: 2, title: "magne", imageUrl: magne },
    { id: 3, title: "level2", imageUrl: level2 },
  ];
const[current,setCurrent]= useState(0)

useEffect(()=>{
    const timer = setInterval(() => {
        setCurrent((prev)=> prev===slider.length -1 ? 0 :prev+1)
    }, 200);
    return ()=> clearInterval(timer)
},[slider.length])
  return <>
  <div>
    {slider.map((slide)=>(
        <div key={slide.id}>
            <img src={slide.imageUrl} alt="" />
        </div>
    ))}
  </div>
  </>;
};

export default Slider;
