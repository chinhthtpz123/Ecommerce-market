"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { PiNotepadThin } from "react-icons/pi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";


const activeCss = (url: string, name: string) => {
    return clsx('p-1', {
        "text-custom": url === name,    
    })
}


export default function SideBarSeller(): React.ReactElement {
    const pathName = usePathname();
    const [showProduct, setShowProduct] = useState<boolean>(pathName.split('/').some((url) => url === 'product'));

    return (
        <div className="h-[calc(100vh-80px)]">
            <Link href="/seller/home" className="">
                <div className="flex flex-row px-4 items-center justify-start space-x-2 h-15">
                    <FaHome className="text-2xl text-gray-400" />
                    <h3 className="text-base top-1 font-light">Home</h3>
                </div>
            </Link>

            <div className="flex flex-row relative px-4">
                <Link href="/seller/order">
                    <div className="flex flex-row items-center justify-start space-x-2 h-15 cursor-pointer">
                        <PiNotepadThin className="text-2xl text-gray-500" />
                        <h3 className="text-base top-1 font-light">Order</h3>
                    </div>
                </Link>

                <FaAngleDown className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer md:block sm:hidden" />
            </div>

            <div className="flex flex-row relative px-4">
                <Link
                    href="/seller/product"
                    onClick={() => setShowProduct(true)}
                >
                    <div className="flex flex-row items-center justify-start space-x-2 h-15 cursor-pointer">
                        <IoBagCheckOutline className="text-2xl text-gray-500" />
                        <h3 className="text-base top-1 font-light">Product</h3>
                    </div>
                </Link>

                {!showProduct && (
                    <FaAngleDown
                        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer md:block sm:hidden"
                        onClick={() => setShowProduct(true)}
                    />
                )}

                {showProduct && (
                    <>
                        <FaAngleUp
                            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer md:block sm:hidden"
                            onClick={() => setShowProduct(false)}
                        />
                        <div className="absolute top-12 left-12">
                            <ul className="text-sm text-gray-400">
                                <Link href="/seller/product/my.product">
                                    <li
                                        className={activeCss(
                                            pathName
                                                .split("/")
                                                .at(-1) as string,
                                            "my.product"
                                        )}
                                    >
                                        My Product
                                    </li>
                                </Link>
                                <Link href="/seller/product/add.product">
                                    <li
                                        className={activeCss(
                                            pathName
                                                .split("/")
                                                .at(-1) as string,
                                            "add.product"
                                        )}
                                    >
                                        Add Product
                                    </li>
                                </Link>
                                <Link href="/seller/product/add.product.items">
                                    <li
                                        className={activeCss(
                                            pathName
                                                .split("/")
                                                .at(-1) as string,
                                            "add.product.items"
                                        )}
                                    >
                                        Add Product Items
                                    </li>
                                </Link>
                                <Link href="/seller/product/my.inventory">
                                    <li
                                        className={activeCss(
                                            pathName
                                                .split("/")
                                                .at(-1) as string,
                                            "my.inventory"
                                        )}
                                    >
                                        My Inventory
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
