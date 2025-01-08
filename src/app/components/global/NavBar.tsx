import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="flex-none sticky top-0 left-0 w-full bg-[#cef8e6] rounded-b-xl shadow-sm p-4">
      <div className="w-full flex justify-between">
        <Link href={"/"}>
          <Image src="/logo_enhanced.png" alt="logo" width={200} height={33} />
        </Link>
        <div className="flex justify-evenly items-center gap-4">
          <Link
            href={"/auth/signup"}
            className="h-fit bg-transparent hover:bg-brand-blue  font-bold py-2 px-4 rounded-xl border border-brand-blue text-dark-100 hover:text-gray-100"
          >
            Sign Up
          </Link>
          <Link
            href={"/auth/login"}
            className="h-fit bg-transparent hover:bg-brand-green  font-semibold  py-2 px-4 rounded-xl border border-brand-green text-dark-100 hover:text-gray-100"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
