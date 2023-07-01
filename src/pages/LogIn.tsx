import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
    return (
        <section className="mt-12 bg-deepRed text-white w-[40%] m-auto h-fit py-12 rounded-lg shadow-xl sm:w-[90%]">
            <h1 className="text-2xl font-thin tracking-wider pl-8 pb-8">LOGIN</h1>
            <form className="w-full grid justify-items-center card">
                <div className="group">
                    <input type="email" name="from_email" required autoComplete="off"/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="font-thin font-lighter font-sm">email</label>
                </div>
                <div className="group">
                    <input type="password" name="from_email" required autoComplete="off"/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="font-thin font-lighter font-sm">password</label>
                </div>
                <button type="submit" className="bg-white m-auto text-lg text-deepRed rounded-md w-3/5 sm:w-4/5 py-2">LOGIN</button>
            </form>
            <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-white h-[0.1rem] px-12" />
                <p className="font-bold">Or</p>
                <div className="bg-white h-[0.1rem] px-12" />
            </div>
            <div className="flex gap-x-2 justify-center items-center mt-4">
                <FaGoogle size={20} />
                <p className="underline">login with Google</p>
            </div>
            <div className="flex items-center gap-x-1 justify-center mt-4">
                <p>Dont't have an account?</p>
                <Link href="/SignUp">
                    <p className="underline">SignUp</p>
                </Link>
            </div>
        </section>
    )
};

export default LogIn;