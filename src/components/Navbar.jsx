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
    
      <div className=" bg-blue-50 w-full h-20 flex justify-around items-center">
        <div className="w-[20vw]">
          <h1 className="text-black text-[30px] ml-3 font-semibold">
            MOVIES CINEMA{" "}
          </h1>
        </div>
        <div className=" flex justify-center w-[500px] ">
          <ul className=" flex gap-15 ">
            <li className="font-bold ">
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive || window.location.pathname === "/"
                    ? "text-red-600"
                    : "text-black";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="font-bold ">
              <NavLink
                to="/movies"
                className={({ isActive }) => {
                  return isActive ? "text-red-600" : "text-black";
                }}
              >
                Movie
              </NavLink>
            </li>
            <li className="font-bold ">
              <NavLink
                to="/ticket-rate"
                className={({ isActive }) => {
                  return isActive ? "text-red-600" : "text-black";
                }}
              >
                Ticket Rate
              </NavLink>
            </li>
          </ul>
        </div>
         {isLoggin ? (
          <>
            <NavLink>{user}</NavLink>
            <button>Logout</button>
          </>
        ) : (
          <>
            <div className="flex gap-5 ">
              <NavLink to="/login" className="hover:text-red-500">
                <h1 className="font-medium transition duration-200">Login</h1>
              </NavLink>
              <NavLink to="/register" className="hover:text-red-500">
                <h1 className="font-medium transition duration-200">
                  Register
                </h1>
              </NavLink>
            </div>
          </>
        )}
      </div>

     
    </>
  );
};

export default Navbar;
