import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const isLocation =  useLocation();

    const isHomeActive = ()=>{
        location.pathname ==="/" || location.pathname ==="/home"
    }
  return (
    <>
      <div className=" bg-[#dcd4c3] w-screen h-20 flex justify-between items-center">
        <div className="w-[20vw]">
          <h1 className="text-black text-[30px] ml-3 font-semibold">
            MOVIES CINEMA{" "}
          </h1>
        </div>
        <div className="bg-white w-[75vw]  h-9 flex justify-between items-center p-4">
          <ul className=" flex gap-2">
            <li className="font-bold ">
              <NavLink
                to="/home"
                className={isHomeActive ? "bg-orange-500 p-2 text-white":"text-black "}
              >
                HOME
              </NavLink>
            </li>

            <li className="font-bold">MOVIES</li>
            <li className="font-bold">TICKET RATE</li>
          </ul>
          <div>
            <h1>LOGIN</h1>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
