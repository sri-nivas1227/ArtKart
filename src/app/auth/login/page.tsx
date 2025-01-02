"use client";
import { useState } from "react";
import showIcon from "@/app/assets/show.png";
import hideIcon from "@/app/assets/hide.png";
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
    <div className=" bg-[#FDFD96]  rounded-xl flex justify-evenly  items-center w-full h-full ">
      <div className="h-full flex justify-end items-center">
        {/* <img
          src="https://picsum.photos/200"
          alt="logo"
          className="rounded-xl"
        /> */}
      </div>
      <div className="relative w-1/2">
        <div className="absolute bg-black w-full h-full -bottom-7 -right-6 rounded-xl"></div>
        <div className="relative font-delius bg-[#f099be] py-6 rounded-xl">
          <h1 className="text-4xl font-delius font-bold text-center text-gray-50">
            Login
          </h1>

          <div className="p-4 w-full flex flex-col gap-4 justify-center items-center">
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-3/5 p-2 border ring-0 ring-offset-0 outline-none text-lg font-medium shadow-inner rounded-xl"
              placeholder="Enter username or email"
            />
            <div className="flex w-3/5 p-2 border bg-white shadow-inner rounded-xl">
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
          </div>
          <div
            onClick={handleSubmit}
            className="text-center m-auto w-3/5 p-2 text-2xl rounded-xl font-semibold shadow-md border border-brand-green hover:bg-brand-green  text-white  bg-brand-blue hover:text-white"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
