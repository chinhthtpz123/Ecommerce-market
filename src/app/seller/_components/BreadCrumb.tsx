"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const UpperFirstCharacter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function BreadCrumb() {
    const pathName = usePathname();
    const breadCrumbList: string[] = useMemo(() => {
        const urlList: string[] = pathName.split('/');
        for (let i = 0; i < urlList.length; i++) {
            if(urlList[i].split('.').length > 1) {
                urlList[i] = urlList[i].split('.').reduce((prev, curr) => prev + " " + UpperFirstCharacter(curr), "")
            }
        }
        return urlList.slice(2);
    }, [pathName]);

    return (
        <nav className="flex" aria-label="BreadCrumb">
            <ol className="flex items-center space-x-1">
                {breadCrumbList.length === 1 ? (
                    <li className="flex items-center text-base
                                font-medium
                                text-gray-700
                                hover:text-blue-600
                                cursor-pointer
                        "
                    >
                        <IoBagCheckOutline className='me-2'/>
                        <span>{UpperFirstCharacter(breadCrumbList[0])}</span>
                    </li>
                ) : (
                    breadCrumbList.map((value, index) => {
                        if (index === 0) {
                            return (
                                <li key={index}>
                                    <Link
                                        href={`/seller/${value}`}
                                        className="text-base
                                    font-semibold
                                    text-gray-700
                                    hover:text-blue-600"
                                    >
                                        <span>
                                            {UpperFirstCharacter(value)}
                                        </span>
                                    </Link>
                                </li>
                            );
                        } else if (index === breadCrumbList.length - 1) {
                            return (
                            <li key={index} aria-current="page">
                                <div className="flex items-center">
                                    <FaAngleRight className="w-3 h-3 text-gray-400 mx-1" />
                                    <span className="ms-1 text-base font-medium text-gray-500">
                                        {UpperFirstCharacter(value)}
                                    </span>
                                </div>
                            </li>
                            );
                        } else {
                            return (
                            <li key={index}>
                                <div className='flex items-center'>
                                    <FaAngleRight className='w-3 h-3 text-gray-400 mx-1' />
                                    <Link href={value}>
                                        <span className='ms-1 font-medium text-gray-700 hover:text-blue-600'>{UpperFirstCharacter(value)}</span>
                                    </Link>

                                </div>
                            </li>
                            );
                        }
                    })
                )}
            </ol>
        </nav>
    );
}
