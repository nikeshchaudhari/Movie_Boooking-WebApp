import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-black w-screen h-20 flex justify-between items-center">
        <div className="w-[20vw]">
          <h1 className="text-white text-[30px]">MOVIES CINEMA </h1>
        </div>
        <div className="bg-white w-[70vw] ml-20 h-8 flex justify-between items-center p-2">
            <ul className=" flex gap-2">
                <li className="font-bold ">HOME</li>
                <li className="font-bold">MOVIES</li>
                <li className="font-bold">TICKET RATE</li>

            </ul>
            <div>
                <h1>LOGIN</h1>
            </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
