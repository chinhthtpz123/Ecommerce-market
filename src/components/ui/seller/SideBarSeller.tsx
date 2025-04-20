"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { PiNotepadThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

export default function SideBarSeller(): React.ReactElement {
    return (
        <div className="h-[calc(100vh-80px)]">
            <Link href="home" className="">
                <div className="flex flex-row px-4 items-center justify-start space-x-2 h-15">
                    <FaHome className="text-2xl text-gray-400" />
                    <h3 className="text-base relative top-1 font-light">
                        Home
                    </h3>
                </div>
            </Link>

            <div className="flex flex-row relative px-4">
                <div className="flex flex-row items-center justify-start space-x-2 h-15 cursor-pointer">
                    <PiNotepadThin className="text-2xl text-gray-500" />
                    <h3 className="text-base ralative top-1 font-light">
                        Order
                    </h3>
                </div>

                <FaAngleDown className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer" />
            </div>

            <div className="flex flex-row relative px-4">
                <div className="flex flex-row items-center justify-start space-x-2 h-15 cursor-pointer">
                    <IoBagCheckOutline className="text-2xl text-gray-500" />
                    <h3 className="text-base ralative top-1 font-light">
                        Product
                    </h3>
                </div>

                <FaAngleDown className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer" />
            </div>
        </div>
    );
}
