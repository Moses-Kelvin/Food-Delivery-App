import Link from "next/link";
import React from "react";


const DropDown = () => {
    return (
        <div className="w-full grid justify-items-center">
            <div className="bg-backdrop text-whiteColor fixed top-24 w-4/5 h-60 z-50">
                <ul className="font-lighter list-none text-2xl font-sans tracking-wider pl-6">
                    <li className="mt-4">Home</li>
                    <li className="mt-2">About</li>
                    <li className="mt-2">Menu</li>
                    <Link href="/Cart"> <li className="mt-2">Cart</li></Link>
                   <Link href="/Contact"><li className="mt-2">Contact</li></Link>
                </ul>
            </div>
        </div>
    )
};


export default DropDown;

