import React from "react";
import { BsFillChatFill } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
    return (
        <section className="w-[70%] sm:w-[90%] bg-white sm:bg-transparent mt-36 grid grid-cols-2 m-auto sm:shadow-none shadow-lg sm:grid-cols-1 sm:mt-20">
            <div className="w-full py-12 pl-16 sm:pl-2">
                <h1 className="text-deepRed leading-normal font-thin font-lighter text-[2rem] sm:text-2xl tracking-widest">LOVE TO HEAR FROM YOU, GET IN TOUCH 👋</h1>
                <form className="w-full pt-8">
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="large-input" className="block w-full focus:outline-none p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MdEmail />
                        </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <input type="text" id="large-input" className="block focus:outline-none w-full p-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                    </div>
                    <button className="relative inline-block px-16 py-2 tracking-widest font-lg font-lighter group">
                        <span className="absolute inset-0 w-full h-full border-2 border-deepRed group-hover:bg-deepRed"></span>
                        <span className="relative text-black group-hover:text-white">SUBMIT</span>
                    </button>
                </form>
            </div>
            <div className="bg-deepRed text-white h-4/5 my-auto w-[90%] translate-x-40 sm:translate-x-0 sm:w-full sm:h-full sm:pb-8 shadow-xl sm:row-start-2 sm:row-end-3">
                <div className="mt-8 ml-8">
                    <h1 className="font-thin font-lighter text-3xl tracking-wide mb-12">CONTACT US</h1>
                    <div className="flex gap-x-4 items-center pr-2 my-4">
                        <MdLocationOn size={30} />
                        <p>19, unity avenue, off isuti rd, egan-igando, lagos.</p>
                    </div>
                    <div className="flex gap-x-4 items-center my-4">
                        <MdPhone size={30} />
                        <p>08108989321</p>
                    </div>
                    <div className="flex gap-x-4 items-center my-4">
                        <MdEmail size={30} />
                        moseskelvin683@gmail.com
                    </div>
                    <div className="flex gap-x-4 items-center my-4">
                        <BsFillChatFill size={30} />
                        <p>08108989321</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact