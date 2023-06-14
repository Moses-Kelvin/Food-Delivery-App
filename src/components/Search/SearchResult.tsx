import Image from "next/image";
import React from "react";
import img5 from "../../assets/Images/img5.jpg";
import { BsFillCartFill } from "react-icons/bs";

const SearchResult = () => {
    return (
        <div className="flex w-4/5 m-auto gap-x-4 items-center border-b-2 border-b-gray-300 border-b-solid pb-4 sm:w-[90%]">
            <Image src={img5} alt="" className="w-16 h-16 rounded-full" />
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="font-bold">Spaghetti</h2>
                    <p>$30.00</p>
                </div>
                <button className="justify-self-end bg-deepRed text-white flex gap-x-2 items-center rounded-xl px-4 sm:px-2">
                    <p className="m-0 p-0">Add</p>
                    <BsFillCartFill size={15} style={{ fill: 'white' }} />
                </button>
            </div>
        </div>
    )
};

export default SearchResult;