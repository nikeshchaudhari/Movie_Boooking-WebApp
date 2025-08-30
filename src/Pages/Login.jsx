import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {login,logout} from "../feature/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"; 
const Login = () => {
  const dispatch = useDispatch();
const userLogin = useSelector((state)=>state.auth)

const[email,setEmail]= useState("")
const[password,setPassword]= useState("")
  const handleLogin =(e)=>{
    e.preventDefault();
    

     if(email==="test@gmail.com"&& passsword ==="12345"){
      dispatch(login({
        user:{email:email},
        passsword :{passsword:passsword}
      }))
     }else{
      console.log("NOt valid");
      
     }

  }

  return (
    <>
      <Navbar />
      <div className="mt-15">
       <div className="w-[450px] h-[400px] mx-auto border border-white rounded-xl">
        <h1 className="text-white text-[30px] text-center mt-3 font-bold">Login </h1>
        <form onSubmit={handleLogin} className=" flex flex-col p-6 items-start ">
          <label htmlFor="email" className="text-white mb-2 font-semibold ">Email</label>
          <input type="text" placeholder="e.g.example@gmail.com " className="border  w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="password" className="text-white mb-2 font-semibold ">Password</label>
           <input type="text" placeholder="*********** " className="border  w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6" value={password} onChange={(e)=>setPassword(e.target.value)}/>

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
