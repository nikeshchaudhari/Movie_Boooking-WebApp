import { isAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { logout } from "../feature/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const user = authState.user;
  const isLoggin = authState.isLoggin;
  return (
    <>
    <div className="relative">
      <div className=" bg-black/20 md:w-full h-20 flex  justify-around items-center ">
        <div className="w-[20vw]">
         <NavLink to="/home">
           <h1 className="text-white text-[30px] ml-3 font-semibold">
            MOVIES CINEMA{" "}
          </h1>
         </NavLink>
        </div>
        <div className=" flex justify-center w-[500px] ">
          <ul className="hidden md:flex gap-15  ">
            <li className="font-bold ">
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive || window.location.pathname === "/"
                    ? "text-yellow-500"
                    : "text-white";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="font-bold ">
              <NavLink
                to="/movies"
                className={({ isActive }) => {
                  return isActive ? "text-yellow-500" : "text-white";
                }}
              >
                Movie
              </NavLink>
            </li>
            <li className="font-bold ">
              <NavLink
                to="/ticket-rate"
                className={({ isActive }) => {
                  return isActive ? "text-yellow-500" : "text-white";
                }}
              >
                Ticket Rate
              </NavLink>
            </li>
          </ul>
        </div>
         {isLoggin ? (
          <>
            <NavLink> {user}</NavLink>
            <button onClick={()=>dispatch(logout())} className="transition duration-200  hover:text-yellow-500 cursor-pointer font-medium" >Logout</button>
          </>
        ) : (
          <>
            <div className="flex gap-5 ">
              <NavLink to="/login" className="hover:text-yellow-500  text-white">
                <h1 className="font-medium transition duration-200">Login</h1>
              </NavLink>
              <NavLink to="/register" className="hover:text-yellow-500 text-white">
                <h1 className="font-medium transition duration-200">
                  Register
                </h1>
              </NavLink>
            </div>
          </>
        )}
        
      </div>
      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white/30" > </span>
    </div>

     
    </>
  );
};

export default Navbar;
