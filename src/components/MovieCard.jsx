import React, { useEffect, useRef, useState } from "react";

const MovieCard = ({ movies }) => {
  const cardRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const start = new IntersectionObserver(([entery]) => {
      if (entery.isIntersecting) {
        setVisible(true);
        start.unobserve(entery.target);
      }
    },
    {threshold:0.1}
  );
  if(cardRef.current){
    start.observe(cardRef.current)
  }
  },[]);

  return (
    <>
      <div className=" md:w-[300px]  " ref={cardRef}>
       {visible ? (
        <>
         <div className="flex flex-col relative ">
          <div className="">
            <img
              src={movies.poster}
              alt={movies.title}
              className=" h-[250px] md:h-[480px] rounded-xl hover:bg-black/20 "
            />
             <span className="absolute top-3 right-3 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-bold">{movies.grade }</span>
          </div>
        </div>
        <div className="">
          <h2 className="mt-2 font-semibold text-lg text-center ">{movies.title}</h2>
         
          
        </div>
        </>
       ):(
        <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded"></div>
       )}
      </div>
    </>
  );
};

export default MovieCard;
