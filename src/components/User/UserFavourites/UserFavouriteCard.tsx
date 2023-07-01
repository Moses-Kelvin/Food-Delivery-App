import React from "react";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import img4 from "../../../assets/Images/img4.jpg";
import { IoMdRemove } from "react-icons/io";

const UserFavouriteCard = () => {
    return (
        <div className="bg-bodyBlue w-44 rounded-lg grid sm:w-52 shadow-lg sm:w-56">
            <Image src={img4} alt="" className="w-32 h-32 rounded-full m-auto -mt-10" />
            <div className="pt-8 pb-2 px-3 ">
                <h2 className="font-bold text-md text-deepRed">Almond Croissant</h2>
                <p className="text-sm">Croissant with almond and honey.</p>
                <h3 className="font-bold text-deepRed text-sm">$150.00</h3>
            </div>
            <div className="rounded-full bg-lightBlue w-6 h-6 grid items-center justify-items-center m-2">
                <IoMdRemove />
            </div>
        </div>
    )
};

export default UserFavouriteCard;

