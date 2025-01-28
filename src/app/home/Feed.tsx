"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import art1 from "@/app/assets/art1.png";
import art2 from "@/app/assets/art2.png";
import { useSearchParams } from "next/navigation";

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log("searchTerm", searchTerm);
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);
  return (
    <div className="p-4">
      <div className="">
        {searchTerm ? (
          <div className="text-4xl font-bold">
            Search results for:{" "}
            <span className="font-thin">"{searchTerm}"</span>
          </div>
        ) : (
          <h1 className="text-4xl font-bold">All Posts</h1>
        )}
      </div>
      <div className="text-black grid grid-cols-2 gap-4">
        {[art1, art2].map((item, index) => (
          <div key={index} className="rounded-xl bg-black bg-opacity-10 p-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-full w-full">
                <Image src={item} alt="art1" className="rounded-xl" />
              </div>
              <div className="p-2 max-h-full flex flex-col">
                <p className="">Current bidding price: $4.50</p>
                <p className="">Initial bidding price: $1.50</p>
                <div className="flex gap-1">
                  <p className="whitespace-nowrap">Your bid:</p>
                  <input
                    type="text"
                    className="rounded-lg p-1 outline-none w-1/2"
                  />
                  <button className="bg-black text-white rounded-lg p-1">
                    Bid
                  </button>
                </div>
                <div className="text-xl font-semibold">Opinions:</div>
                <div className="">
                  {["wow", "amazing", "cool"].map((item, index) => (
                    <div key={index} className="flex gap-1">
                      <span className="text-sm">User {index + 1}:</span>
                      <span>{item}</span>

                      <button className="text-sm text-blue-500">Reply</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-2 ">
              <h2 className="text-2xl font-bold">Art 1</h2>
              <h3 className="text-sm font-semibold text-blue-700 cursor-pointer">
                Srinivas Mekala
              </h3>
              <p className="text-lg font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
