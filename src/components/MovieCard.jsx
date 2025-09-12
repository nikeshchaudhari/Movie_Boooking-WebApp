import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"
const MovieCard = ({ movies }) => {
  const cardRef = useRef();
  const [visible, setVisible] = useState(false);
  const [showTrailer, setShowTrailer]= useState(false);
  useEffect(() => {
    const start = new IntersectionObserver(
      ([entery]) => {
        if (entery.isIntersecting) {
          setVisible(true);
          start.unobserve(entery.target);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) {
      start.observe(cardRef.current);
    }
  }, []);

  return (
    <>
      <div className=" md:w-[300px]  " ref={cardRef}>
        {visible ? (
          <>
            <div className="flex flex-col relative group overflow-hidden ">
              <div className="">
                <img
                  src={movies.poster}
                  alt={movies.title}
                  className=" h-[250px] md:h-[480px] rounded-br-4xl rounded-tl-4xl transform transition group-hover:brightness-50  duration-500 cursor-pointer "
                />
                <span className="absolute  top-3 right-3 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-bold">
                  {movies.grade}
                </span>
                <div className="absolute inset-0 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                 <AiOutlinePlayCircle className="text-[60px] mb-2 transform transition-transform duration-300 hover:scale-125 " onClick={()=>setShowTrailer(true)}/>
              <Link to={`/moviedetails/${movies.id}`}>
              <span className="font-semibold text-[20px] hover:text-red-300">BUY NOW</span>
              </Link>
            </div>
              </div>
            </div>
            <div className="">
              <h2 className="mt-2 font-semibold text-lg text-center ">
                {movies.title}
              </h2>
            </div>  
            
          </>
        ) : (
          <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded"></div>
        )}
      </div>

      {/* Show Trailer */}

      {showTrailer && (
        <div className="fixed inset-0 bg-black/90 z-10 flex justify-center items-center">
          <div className="relative w-[70%] h-[500px]">
            <ReactPlayer src="https://www.youtube.com/watch?v=x2QZl1dqWbY&t=30s&pp=ygUTbWFuZ25lIHJhamEgdHJhaWxlcg%3D%3D" playing controls  width="100%"
              height="500px"/>
            <button className="absolute text-white text-[50px] -top-10 -right-10 cursor-pointer " onClick={()=>setShowTrailer(false)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
