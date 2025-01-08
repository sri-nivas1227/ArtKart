"use client";
import splashPink from "@/app/assets/auth/pink-splash.svg";
import splashYellow from "@/app/assets/auth/yellow-splash.svg";
import splashGreen from "@/app/assets/auth/green-splash.svg";
import splashOrange from "@/app/assets/auth/orange-splash.svg";
import brush from "@/app/assets/auth/brush.svg";
import butterfly from "@/app/assets/auth/butterfly.svg";
import partyGlobe from "@/app/assets/auth/party-globe.svg";
import spiralFlower from "@/app/assets/auth/flower-1.svg";
import thickFlower from "@/app/assets/auth/flower-2.svg";
import pencils from "@/app/assets/auth/pencils.svg";
import Image from "next/image";
import NameLogo from "../components/global/NameLogo";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid bg-[#ffdfcd] grid-cols-2 items-center h-full overflow-hidden">
      <div className="relative grid grid-cols-3 w-full h-full">
        {/* <div className="relative col-span-1"> */}
        <Image
          src={splashPink}
          alt="splash"
          width={300}
          height={300}
          className="absolute -left-14 animate-jump-in"
        />
        <Image
          src={splashYellow}
          alt="splash"
          width={300}
          height={300}
          className="absolute top-24  animate-jump-in"
        />
        <Image
          src={spiralFlower}
          alt="splash"
          width={200}
          height={200}
          className="absolute bottom-48 -left-14 animate-jump-in"
        />
        <Image
          src={pencils}
          alt="splash"
          width={240}
          height={240}
          className="absolute -bottom-14 -left-20 animate-jump-in"
        />
        {/* </div> */}
        {/* <div className="relative col-span-2"> */}
        <Image
          src={splashGreen}
          alt="splash"
          width={400}
          height={400}
          className="absolute -top-48 right-28 motion-preset-pop"
        />
        <Image
          src={brush}
          alt="splash"
          width={400}
          height={400}
          className="absolute -top-12 -right-48 hover:animate-jump-in"
        />
        <NameLogo className="absolute -rotate-12 bottom-44 text-9xl right-0" />
        <Image
          src={thickFlower}
          alt="splash"
          width={200}
          height={200}
          className="absolute bottom-0 right-0  animate-jump-in"
        />
        {/* </div> */}
      </div>
      <div className="grid grid-cols-3 h-full items-center">
        <div className="relative col-span-2">
          <div className="">
            <Image
              src={splashOrange}
              alt="splash"
              width={300}
              height={300}
              className="absolute top-42 left-64 animate-jump-in"
            />
          </div>
          <div className="">{children}</div>
        </div>
        <div className="relative flex flex-col items-stretch justify-between h-full">
          <Image
            src={partyGlobe}
            alt="splash"
            width={200}
            height={200}
            className=""
          />
          <Image
            src={butterfly}
            alt="splash"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 hover:animate-bounce animate-jump-in"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
