import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="mt-15">
       <div className="w-[450px] h-[300px] mx-auto border border-white rounded-xl">
        <form className=" flex flex-col p-5 items-start ">
          <label htmlFor="email" className="text-white mb-2 font-semibold ">Email</label>
          <input type="text" placeholder="e.g.example@gmail.com " className="border  w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"/>
          <label htmlFor="password" className="text-white mb-2 font-semibold ">Password</label>
           <input type="text" placeholder="e.g.example@gmail.com " className="border  w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-2"/>
        </form>
       </div>
      </div>
    </>
  );
};

export default Login;
