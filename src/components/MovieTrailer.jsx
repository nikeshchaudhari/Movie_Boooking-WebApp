import React from "react";
import ReactPlayer from "react-player";
const MovieTrailer = ({ url }) => {
  return (
    <>
      <div className="w-full h-[500px] bg-black  flex items-center justify-center">
          <ReactPlayer
          src="https://youtu.be/x2QZl1dqWbY"
          playing
          
          controls
          width="60%"
          height="400px"
        />
      </div>
      

      {/* overlay */}
      <div className="absolute top-0 w-screen h-screen bg-black">

      </div>
    </>
  );
};

export default MovieTrailer;
