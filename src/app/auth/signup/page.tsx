"use client";
import { useState } from "react";
import showIcon from "@/app/assets/show.png";
import hideIcon from "@/app/assets/hide.png";
import rightWhite from "@/app/assets/right-white.png";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
        firstName,
        lastName,
        dob,
        email,
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative font-delius w-full min-h-full  py-6 rounded-3xl">
      <h1 className="font-fingerPaint text-[#ff3131] text-6xl text-center m-6">
        Sign Up
      </h1>
      <div className="p-4 w-full flex flex-col gap-4 justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border ring-0 outline-none text-lg opacity-80 shadow-inner rounded-full "
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border ring-0 outline-none text-lg opacity-80 shadow-inner rounded-full "
            placeholder="Last Name"
          />
        </div>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={`${
            dob ? "text-black" : "text-gray-400"
          } w-full p-2 border ring-0 outline-none text-lg opacity-80 font-medium shadow-inner rounded-full`}
          placeholder="Date of Birth"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border outline-none text-lg opacity-80 font-medium shadow-inner rounded-full"
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border ring-0 ring-offset-0 opacity-80 outline-none text-lg font-medium shadow-inner rounded-full"
          placeholder="Enter username or email"
        />
        <div className="flex w-full p-2 border bg-white opacity-80 shadow-inner rounded-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-lg font-medium outline-none"
            placeholder="Enter the password"
          />
          <Image
            src={showPassword ? hideIcon : showIcon}
            alt="show"
            width={20}
            height={20}
            onClick={() => setShowPassword((prev) => !prev)}
            className=" cursor-pointer"
          />
        </div>
        <div className="flex w-full p-2 border opacity-80 bg-white shadow-inner rounded-full">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-transparent text-lg font-medium outline-none"
            placeholder="Enter the password"
          />
          <Image
            src={showConfirmPassword ? hideIcon : showIcon}
            alt="show"
            width={20}
            height={20}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className=" cursor-pointer"
          />
        </div>
      </div>
      <div
        onClick={handleSubmit}
        className={`text-center m-auto w-fit cursor-pointer p-2 text-2xl rounded-full font-semibold shadow-md hover:invert bg-black`}
      >
        <Image
          src={rightWhite}
          alt="show"
          width={40}
          height={40}
          className=""
        />
      </div>
    </div>
  );
};

export default Page;
