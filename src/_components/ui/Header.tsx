"use client";
import { usePathname, useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

const titleAuth: string[] = ["Đăng nhập", "Đăng ký"];

const checkPathname = (pathname: string): string => {
  if (pathname.match("login")) {
    return titleAuth[0];
  } else {
    return titleAuth[1];
  }
};

export const HeaderLandingPage = (): React.ReactElement => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-between h-24 lg:mx-20 sm:mx-10">
      <Link href='/home'>
        <div className="flex flex-row items-center space-x-2">
            <FaCartShopping className="lg:text-5xl text-custom sm:text-4xl" />
          <p className="text-custom lg:text-3xl italic sm:text-xl">E-Market</p>
        </div>
      </Link>

      <div className="flex flex-row items-center lg:space-x-8 sm:space-x-3">
        <div className="lg:text-2xl text-custom header-link-landing sm:text-base">
          <Link href="#home" className="">
            Home
          </Link>
        </div>

        <div className="lg:text-2xl text-custom header-link-landing sm:text-base">
          <Link href="#about">About</Link>
        </div>

        <div className="lg:text-2xl text-custom header-link-landing sm:text-base">
          <Link href="#team">Team</Link>
        </div>
      </div>

      <div className="flex flex-row items-center lg:space-x-2 sm:space-x-1">
        <div className="border-2 p-2 border-custom rounded-md shadow-sm header-link-landing bg-white ">
          <button
            type="button"
            className="cursor-pointer text-custom w-32"
            onClick={() => router.push("/register")}
          >
            Create Account
          </button>
        </div>

        <div className="border-2 p-2 border-custom rounded-md shadow-sm header-link-landing bg-white">
          <button
            type="button"
            className="cursor-pointer text-custom w-32"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeaderProduct = (): React.ReactElement => {
  return <div>Header Product</div>;
};

export const HeaderAuth = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-24 flex justify-start items-center shadow-md bg-white">
      <div className="flex ml-14 items-center justify-center">
        <div className="flex flex-col items-center justify-center mr-1">
          <FaCartShopping className="text-[#1b94b4cc] text-3xl" />
          <span className="text-sm text-[#1b94b4cc]">E-Market</span>
        </div>
        <h1 className="text-2xl text-[#1b94b4cc]">{checkPathname(pathname)}</h1>
      </div>
    </div>
  );
};
