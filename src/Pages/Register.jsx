import { useFormik } from "formik";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import{login} from '../feature/auth'

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== conpassword) {
      return console.log("Password Doesnot Match");
    }
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("conpassword", conpassword);
    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      conpassword,
    };

    try {
      const res = await axios.post("http://localhost:4080/users/add-user", data);
       console.log("User registered", res.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConPassword("");

      navigate("/login")


    } catch (err) {
      console.log("Error Register");
    }
  };
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <div className="w-full  md:w-[450px] h-[70vh] mb-5 md:h-full mx-auto border border-black rounded-xl">
          <h1 className="text-black text-[30px] text-center mt-3 font-bold">
            Register{" "}
          </h1>
          <form
            onSubmit={handleRegister}
            className=" flex flex-col p-6 items-start"
          >
            <label
              htmlFor="firstname"
              className="text-black mb-2 font-semibold "
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="e.g.Jhon"
              className="border w-full  md:w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label
              htmlFor="lastname"
              className="text-black mb-2 font-semibold "
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="e.g doe"
              className="border w-full   md:w-[400px]   h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="phone" className="text-black mb-2 font-semibold ">
              Phone
            </label>
            <input
              type="text"
              placeholder="e.g.9xxxxxxx"
              className="border w-full   md:w-[400px]   h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="email" className="text-black mb-2 font-semibold ">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g example@gmail.com"
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
              placeholder="***********"
              className="border  w-full   md:w-[400px]   h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="con-password"
              className="text-black mb-2 font-semibold "
            >
              Confirm password
            </label>
            <input
              type="password"
              placeholder="***********"
              className="border  w-full   md:w-[400px]  h-10  bg-white rounded-lg p-4 focus:border-red-500 focus:outline-none mb-6"
              value={conpassword}
              onChange={(e) => setConPassword(e.target.value)}
            />

            <button
              type="submit"
              className=" bg-red-600 w-full  md:w-[400px]  h-10 rounded-4xl text-white font-bold cursor-pointer hover:bg-red-900 transition hover:duration-500 mb-4"
            >
              Login
            </button>
            <p className="text-center w-full text-black">
              I have an account? <span className="text-[#00E5FF]">Login</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
