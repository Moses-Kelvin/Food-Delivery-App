import Image from "next/image";
import React from "react";
import img3 from "../../assets/Images/img3.jpg";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

const CartItem = () => {
    return (
        <div className="flex gap-x-8 w-full items-center border-b-2 border-b-gray-300 border-b-solid pb-4 sm:gap-x-4">
            <Image src={img3} alt="" className="rounded-full w-24 h-24 sm:w-12 sm:h-12" />
            <div className="flex justify-between w-4/5">
                <div className="flex gap-x-4 sm:flex-col">
                    <h1 className="font-bold text-xl sm:text-lg">Noodles</h1>
                    <p className="sm:text-sm">$200.00</p>
                </div>
                <div className="flex gap-x-2 mr-8">
                    <IoMdAdd size={20} />
                    <IoMdRemove size={20} />
                    <AiFillDelete />
                </div>
            </div>
        </div>
    )
}

export default CartItem;