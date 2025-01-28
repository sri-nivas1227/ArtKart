import search from "@/app/assets/search.svg";
import Image from "next/image";
const UtilityBar = () => {
  return (
    <div className="utility-bar">
      <div className="w-1/2 m-auto group bg-white flex gap-3 rounded-full p-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full font-semibold p-1 outline-none"
        />
        <div className="p-1 rounded-full bg-black">
          <Image src={search} alt="search" className="w-7 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
