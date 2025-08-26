import { isAction } from "@reduxjs/toolkit";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const isLocation =  useLocation();

    const isHomeActive = ()=>{
        return location.pathname ==="/" || location.pathname ==="/home"
    }
  return (
    <>
      <div className=" bg-blue-50 w-full h-20 flex justify-around items-center">
        <div className="w-[20vw]">
          <h1 className="text-black text-[30px] ml-3 font-semibold">
            MOVIES CINEMA{" "}
          </h1>
        </div>
        <div className=" flex justify-center w-[500px] ">
          <ul className=" flex gap-15 ">
            <li>
              <NavLink>

              </NavLink>
            </li>
            <li className="font-bold ">
              <NavLink
                to="/home"
                className={({isActive})=>{
                  return isActive  ?"text-red-600":"text-black";
                }}
              >
                Home
              
              </NavLink>
            </li>
            <li className="font-bold ">
              <NavLink to="/movies"
              className={({isActive})=>{
                return isActive?"text-red-600":"text-black";
              }}>
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink>Ticket Rate</NavLink>
            </li>
           
          </ul>
        
        </div>
          <div className="flex gap-5 ">
            <h1>Login</h1>
            <h1>Register</h1>
          </div>
      </div>
    </>
  );
};

export default Navbar;
