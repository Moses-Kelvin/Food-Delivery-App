import Image from "next/image";
import React from "react";
import img3 from "../../assets/Images/img3.jpg";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

const CartItem = () => {
    return (
        <div className="flex gap-x-8 w-full items-center border-b-2 border-b-gray-300 border-b-solid pb-4">
            <Image src={img3} alt="" className="rounded-full w-24 h-24" />
            <div className="flex gap-x-4">
                <h1 className="font-bold text-xl">Noodles</h1>
                <p>$200.00</p>
            </div>
            <div className="flex gap-x-4 ml-44">
                <IoMdAdd size={20} />
                <IoMdRemove size={20} />
                <AiFillDelete />
            </div>
        </div>
    )
}

export default CartItem;