import Link from "next/link";
import React from "react";


const DropDown = () => {
    return (
        <div className="w-full grid justify-items-center">
            <div className="bg-backdrop text-whiteColor fixed top-24 w-4/5 h-fit py-6 z-50">
                <ul className="grid gap-y-1 font-lighter font-thin list-none text-2xl font-sans tracking-wider pl-6">
                    <Link href="/"> <li>Home</li></Link>
                    <Link href="/Cart"> <li>Cart</li></Link>
                    <Link href="/Contact"><li>Contact</li></Link>
                    <Link href="/User"><li>Account</li></Link>
                    <Link href="/LogIn"><li>Log In</li></Link>
                    <Link href="/SignUp"><li>Sign Up</li></Link>
                </ul>
            </div>
        </div>
    )
};


export default DropDown;

