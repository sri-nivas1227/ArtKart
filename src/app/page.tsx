"use client";
import Image from "next/image";
import NameLogo from "./components/global/NameLogo";
import butterfly from "@/app/assets/landing/butterfly-color.svg";
import LoginIcon from "@/app/assets/landing/login.svg";
import SignupIcon from "@/app/assets/landing/signup.svg";
import cloud from "@/app/assets/landing/cloud.svg";
import githubIcon from "@/app/assets/landing/github.svg";
import linkedinIcon from "@/app/assets/landing/linkedin.svg";
import Link from "next/link";
import ImageCarousel from "./components/global/ImageCarousel";
export default function Home() {
  
  return (
    <div className="p-5 w-full bg-brand-beige overflow-hidden">
      <div className="grid grid-cols-2 gap-2">
        {/* Content Section */}
        <div className="">
          <NameLogo
            onClick={() => {
              console.log("logo clicked");
            }}
            className="text-8xl text-center"
          />
          <div className="m-8 font-waterlily text-brand-pink text-6xl text-center">
            Get what your <span className="text-brand-yellow">A</span>
            <span className="text-brand-pink">R</span>
            <span className="text-brand-blue">T</span> is worth{" "}
          </div>
          <div className="text-3xl text-justify m-8 font-itim">
            Welcome to our unique art marketplace, where your creativity meets
            the power of community! As an artist, you set the stage by choosing
            a starting price and a deadline for your artwork. Then, let the
            bidding begin! Buyers will place their bids, and when the deadline
            arrives, the highest bid becomes the final price. This dynamic
            process ensures that your art finds its true value through the eyes
            of those who appreciate it most. Ready to showcase your masterpiece
            and let the world decide its worth? Start selling now!
          </div>
          <div className="relative">
            <Image
              alt="butterfly"
              src={butterfly}
              width={70}
              height={70}
              className="absolute -top-10 left-40"
            />
            <div className="font-waterlily text-7xl text-center">
              <span className="text-brand-pink">A</span>
              <span className="text-brand-blue">B</span>
              <span className="text-brand-green">O</span>
              <span className="text-brand-yellow">U</span>
              <span className="text-brand-blue">T</span>
              <span className="text-brand-yellow"> </span>
              <span className="text-brand-green">U</span>
              <span className="text-brand-pink">S</span>
            </div>
          </div>
          <div className="text-3xl text-justify m-8 font-itim">
            We’re Aakanksha and Srinivas—two art lovers with a shared passion
            for creativity. Aakanksha designed this platform to help artists
            showcase their work, while Srinivas developed the site to bring that
            vision to life. Together, we built this space to celebrate art in
            all its forms and connect creators with collectors.
          </div>
          <div className="flex justify-evenly">
            <Link href={"/auth/login"}>
              <Image
                src={LoginIcon}
                alt="login icon"
                width={150}
                height={150}
                className="cursor-pointer p-2 hover:-translate-y-1"
              />
            </Link>
            <Link href={"/auth/signup"}>
              <Image
                src={SignupIcon}
                alt="login icon"
                width={150}
                height={150}
                className="cursor-pointer p-2 hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
        {/* Display Section */}
        <div className="grid grid-rows-8">
          <div className="row-span-1 flex justify-end my-6 gap-6">
            <Link href={"/auth/login"}>
              <Image
                src={LoginIcon}
                alt="login icon"
                width={150}
                height={150}
                className="cursor-pointer hover:-translate-y-1"
              />
            </Link>
            <Link href={"/auth/signup"}>
              <Image
                src={SignupIcon}
                alt="login icon"
                width={150}
                height={150}
                className="cursor-pointer  hover:-translate-y-1"
              />
            </Link>
          </div>
          <div className="row-span-7 w-full">
            <ImageCarousel />
          </div>
        </div>
      </div>
      <footer className="my-12 relative w-full min-h-28 border-black">
        <div className="absolute w-full z-10 top-16">
          <div className="w-full flex justify-between p-4 items-baseline">
            <div className="w-full h-full">
              Made with ❤️ by Srinivas🧑‍💻 and Aakanksha🎨
            </div>
            <div className="">
              <div className="flex gap-4 justify-center">
                <Link href={"https://github.com/sri-nivas1227"}>
                  <Image src={githubIcon} alt="cloud" height={60} width={60} />
                </Link>
                <Link href={"https://www.linkedin.com/in/sri-nivas1227/"}>
                  <Image
                    src={linkedinIcon}
                    alt="cloud"
                    height={60}
                    width={60}
                  />
                </Link>
              </div>
              <p className="text-center">srinivasmekala1227@gmail.com</p>
            </div>
          </div>
        </div>
        <Image
          src={cloud}
          alt="cloud"
          height={600}
          width={600}
          className="absolute w-screen -top-8 z-0"
        />
      </footer>
    </div>
  );
}
