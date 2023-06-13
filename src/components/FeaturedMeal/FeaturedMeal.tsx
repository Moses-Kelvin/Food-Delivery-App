import Image from "next/image";
import React from "react";
import img7 from "../../assets/Images/img7.jpg";
import { GrAdd } from "react-icons/gr";

const FeaturedMeal = () => {
    return (
        <div className="w-66 border-solid border-2 border-gray-200 sm:w-80 shadow-lg">
            <Image src={img7} alt="" className="w-full h-1/2" />
            <div className="pt-10 pl-4">
                <h1 className="font-bold">Noodles</h1>
                <p>stir fry noodles with veges.</p>
            </div>
            <div className="pl-4 flex justify-between items-center mt-6 mb-2">
                <h2 className="text-deepRed">$200.00</h2>
                <p className="mr-28 font-thin text-sm text-grey line-through">$300.00</p>
                <div className="bg-deepRed text-white text-lighter font-small px-2">-10%</div>
            </div>
            <div className="w-12 h-12 rounded-full -mb-16 bg-deepRed flex items-center justify-center sm:w-16 sm:h-16">
                <GrAdd size={20} />
            </div>
        </div>
    )
};

export default FeaturedMeal;