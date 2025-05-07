import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import PopupNotification from "./PopupNotification";
import PopupAcc from "./PopUpAcc";

export default function HeaderSeller() {
  
    return (
        <div className="flex items-center justify-between p-4">
            <Link href="">
                <div className="flex flex-row items-center space-x-1">
                    <div className="flex flex-col justify-center items-center">
                        <FaCartShopping className="text-4xl text-custom" />
                        <p className="text-sm italic text-custom ">E-Market</p>
                    </div>

                    <h3 className="text-xl italic text-custom">
                        Seller Center
                    </h3>
                </div>
            </Link>

            <div className="flex flex-row items-center justify-center space-x-0.5 md:mr-0.5 lg:mr-2">
                <PopupNotification />

                <div className="w-[1px] h-4 bg-gray-400 mx-2 "></div>

                <PopupAcc />
            </div>
        </div>
    );
}
