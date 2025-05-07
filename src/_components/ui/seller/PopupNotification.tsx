"use client";

import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function PopupNotification() {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="relative">
            <div
                className="cursor-pointer"
                // onMouseEnter={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
                onClick={() => setShow((prev) => !prev)}
            >
                <IoIosNotificationsOutline className="text-3xl" />
            </div>

            {show && (
                <div className="absolute top-9 right-0 z-10 w-2xs outline-none overflow-hidden rounded-sm shadow-xs">
                    <div>
                        <h3 className="w-full h-7 text-base text-center p-1 font-light bg-linear-to-l/hsl from-sky-50 to-sky-100 text-custom">
                            Notifications
                        </h3>

                        <div className="bg-white">
                            <div className="notification-content min-h-8 max-h-24 overflow-auto">
                                <div className="flex flex-row space-x-0.5 p-1">
                                    <p className="text-sm font-medium">
                                        information of the production
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        18:30
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
