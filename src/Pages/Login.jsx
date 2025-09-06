import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );

      if (res.data.length > 0) {
        dispatch(
          login({
            user: { email: res.data[0].email },
            token: "data.token",
          })
        );

        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        console.log("Invalid email or password");
      }
    } catch (err) {
      console.log("Invalid email or password");
    }

  //     if (email === "test@gmail.com" && password === "12345") {
  //       dispatch(
  //         login({
  //           user: { email: email },
  //           token: "dummy1234",
  //         })
  //       );
  //       navigate('/');
  //       setEmail("");
  //       setPassword("");
  //       console.log("Login sucessfull");
  //     } else {
  //       console.log("NOt valid");
  //     }
  };

  return (
    <>
      <Navbar />
      <div className="mt-15">
        <div className="w-[450px] h-[400px] mx-auto border border-black rounded-xl">
          <h1 className="text-black text-[30px] text-center mt-3 font-bold">
            Login{" "}
          </h1>
          <form
            onSubmit={handleLogin}
            className=" flex flex-col p-6 items-start "
          >
            <label htmlFor="email" className="text-black mb-2 font-semibold ">
              Email
            </label>
            <input
              type="text"
              placeholder="e.g.example@gmail.com "
              className="border w-full   md:w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="password"
              className="text-black mb-2 font-semibold "
            >
              Password
            </label>
            <input
              type="password"
              placeholder="*********** "
              className="border w-full   md:w-[400px] h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className=" bg-red-600 w-[400px] h-10 rounded-4xl text-white font-bold cursor-pointer hover:bg-red-900 transition hover:duration-500 mb-4"
            >
              Login
            </button>
            <p className="text-center w-full text-black">
              Don’t have an account?{" "}
              <span className="text-[#00E5FF]">Register</span>
            </p>
            <p className="text-center w-full text-black">
              Having trouble signing in?{" "}
              <span className="text-[#00E5FF]">Reset Password</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
