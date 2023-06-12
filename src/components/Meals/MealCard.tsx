import React from "react";
import img4 from "../../assets/Images/img4.jpg";
import Image from "next/image";
import { GrAdd } from "react-icons/gr";

const MealCard: React.FC = () => {
    return (
        <div className="bg-lightBlue w-52 rounded-lg grid sm:w-52 whitespace-normal">
            <Image src={img4} alt="" className="w-32 h-32 rounded-full m-auto -mt-10" />
            <div className="pt-8 pb-2 px-3 ">
                <h2 className="font-bold ">Almond Croissant</h2>
                <p>Croissant with almond and honey.</p>
                <h3 className="font-bold text-deepRed">$150.00</h3>
            </div>
            <div className="w-12 h-12 rounded-full -mb-3 bg-tangerineYellow justify-self-end flex items-center justify-center sm:w-16 sm:h-16 ">
                <GrAdd size={20} />
            </div>
        </div>
    )
};

export default MealCard;