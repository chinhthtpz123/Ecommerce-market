"use client";

import Link from "next/link";
import { useState } from "react";
import { CiUser } from "react-icons/ci";

export default function PopupAcc() {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="relative">
            <div
                className="border rounded-full min-w-fit p-0.5 ml-1 cursor-pointer"
                // onMouseEnter={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
                onClick={() => setShow((prev) => !prev)}
            >
                <CiUser className="text-2xl" />
            </div>

            {show && (
                <div className="bg-white absolute top-9 right-0 z-10 shadow-sm w-2xs overflow-hidden outline-none rounded-sm">
                    <div className="flex flex-row items-center justify-between p-2 bg-linear-to-l/hsl from-sky-50 to-sky-100">
                        <Link href="acc">
                            <div className="border rounded-full p-0.5 cursor-pointer bg-white">
                                <CiUser className="text-2xl" />
                            </div>
                        </Link>

                        <button className="border bg-sky-300 text-white rounded-md shadow-2xs p-1 text-base cursor-pointer">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
