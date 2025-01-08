import homePageArts from "@/app/resources/homePageArts.json";
import Image from "next/image";

const ImageCarousel = () => {
  return (
    <div className="w-full h-full p-2">
      <ul className="p-2 rounded-2xl w-full h-full grid grid-cols-3 justify-center items-center gap-[4%]">
        {homePageArts.map((art, index) => (
          <li
            key={index}
            className={`w-full h-full hover:shadow-stripe rounded-2xl cursor-pointer  flex justify-center items-end`}
          >
            <Image
              src={art.image}
              alt="image"
              width={1000}
              height={1000}
              className={`hover:grayscale-0 grayscale hover:shadow-stripe w-full h-full object-cover transition-all duration-400  rounded-2xl`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageCarousel;
