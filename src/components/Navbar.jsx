import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { logout } from "../feature/auth/authSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import axios from "axios";
import Slider from "./Slider";

const Navbar = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const user = authState.user;
  const isLoggin = authState.isLoggin;
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="relative">
        <div className=" bg-black/20 md:w-full h-20 flex  justify-around items-center ">
          <div className="w-[80vw] md:w-[20vw] mx-5 md:mx-0">
            <NavLink to="/home">
              <h1 className="text-white  text-[20px] lg:text-[30px] mx-2 lg:ml-3 md:font-semibold  md:w-[300px]">
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
              <button
                onClick={() => dispatch(logout())}
                className="transition duration-200  hover:text-yellow-500 cursor-pointer font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="flex md:gap-5 gap-3 mx-5">
                <NavLink
                  to="/login"
                  className="hover:text-yellow-500  text-white"
                >
                  <h1 className="font-medium transition duration-200">Login</h1>
                </NavLink>
                <NavLink
                  to="/register"
                  className="hover:text-yellow-500 text-white"
                >
                  <h1 className="font-medium transition duration-200">
                    Register
                  </h1>
                </NavLink>
              </div>
            </>
          )}
          {/* Hamburger */}

          <div className="mr-5 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="text-white text-[25px]" />
            ) : (
              <RxHamburgerMenu className="text-white text-[25px]" />
            )}
          </div>
        </div>

        {/* Mobile View */}

        {isOpen && (
          <div
            className="bg-black  w-[95vw]  h-full fixed 
           right-0  text-white z-1"
          >
            <div className="flex flex-col gap-2 ml-8 mt-5 ">
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? "text-yellow-500" : "text-white";
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) => {
                  return isActive ? "text-yellow-500" : "text-white";
                }}
              >
                Movies
              </NavLink>
              <NavLink
                to="/ticket-rate"
                className={({ isActive }) => {
                  return isActive ? "text-yellow-500" : "text-white";
                }}
              >
                Ticket Rates
              </NavLink>
            </div>
          </div>
        )}
        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white/30 md">
          {" "}
        </span>
      </div>
      
     
    </>
  );
};

export default Navbar;
