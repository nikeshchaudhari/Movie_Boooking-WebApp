import React from "react";
import ReactPlayer from "react-player";
const MovieTrailer = ({ url }) => {
  return (
    <>
    <div className="w-full h-[500px] relative">
         <div className="absolute inset-0 bg-black/20 z-0">
          <ReactPlayer
          src="https://youtu.be/x2QZl1dqWbY"
          playing
          
          controls
          width="60%"
          height="400px"
           className="absolute top-0 left-0 z-10"
        />
      </div>

    </div>
     
    </>
  );
};

export default MovieTrailer;
