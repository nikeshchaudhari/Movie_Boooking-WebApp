import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
const initialValues={
  email :"",
  password: "",
};
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="mt-15">
       <div className="w-[450px] h-[400px] mx-auto border border-white rounded-xl">
        <h1 className="text-white text-[30px] text-center mt-3 font-bold">Login </h1>
        <form className=" flex flex-col p-6 items-start ">
          <label htmlFor="email" className="text-white mb-2 font-semibold ">Email</label>
          <input type="text" placeholder="e.g.example@gmail.com " className="border  w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"/>
          <label htmlFor="password" className="text-white mb-2 font-semibold ">Password</label>
           <input type="text" placeholder="*********** " className="border  w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"/>

           <button type="submit" className=" bg-red-600 w-[400px] h-10 rounded-4xl text-white font-bold cursor-pointer hover:bg-red-900 transition hover:duration-500 mb-4">Login</button>
           <p className="text-center w-full text-white">Don’t have an account? <span className="text-[#00E5FF]">Register</span></p>
           <p className="text-center w-full text-white">Having trouble signing in? <span className="text-[#00E5FF]">Reset Password</span></p>
          
        </form>
       </div>
      </div>
    </>
  );
};

export default Login;
