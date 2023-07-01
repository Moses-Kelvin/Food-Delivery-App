import Image from "next/image";
import React from "react";
import img5 from "../../assets/Images/img5.jpg";
import { GrAdd } from "react-icons/gr";

const SearchResult = () => {
    return (
        <div className="flex w-4/5 m-auto gap-x-4 items-center border-b-2 border-b-gray-300 border-b-solid pb-4 sm:w-[90%]">
            <Image src={img5} alt="" className="w-16 h-16 rounded-full" />
            <div className="flex justify-between w-full">
                <div className="grid gap-y-2">
                    <h2 className="font-bold">Spaghetti</h2>
                    <p className="text-sm">$30.00</p>
                </div>
                <div className="p-2 bg-bodyBlue rounded-full grid justify-items-center items-center justify-self-end">
                    <GrAdd size={20} style={{ color: '#8E0D3C' }} />
                </div>
            </div>
        </div>
    )
};

export default SearchResult;