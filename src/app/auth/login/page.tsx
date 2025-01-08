"use client";
import { useState } from "react";
import showIcon from "@/app/assets/show.png";
import hideIcon from "@/app/assets/hide.png";
import rightWhite from "@/app/assets/right-white.png";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
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
    <div className="">
      <div className="font-fingerPaint text-[#ff3131] text-6xl text-center m-6">
        Login
      </div>
      <div className="p-4 w-full flex flex-col gap-8 justify-center items-center">
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full opacity-80 p-2 border ring-0 ring-offset-0 outline-none text-lg font-medium shadow-inner rounded-full"
          placeholder="Enter username or email"
        />
        <div className="flex w-full p-2 border bg-white opacity-80 shadow-inner rounded-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full  text-lg font-medium outline-none"
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
      </div>
      <div
        onClick={handleSubmit}
        className={` text-center m-auto w-fit cursor-pointer p-2 text-2xl rounded-full font-semibold shadow-md hover:invert bg-black`}
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
