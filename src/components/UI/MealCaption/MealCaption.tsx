import React from "react";
import { MdRestaurantMenu } from "react-icons/md";

interface Caption {
  header: string;
  note: string;
  imgUrl: string;
}

const MealCaption = ({ header, note, imgUrl }: Caption) => {

  return (
    <div className="relative w-full py-48 my-12 sm:py-24">
      <div className={`${imgUrl} bg-no-repeat absolute bg-cover top-0 left-0 bottom-0 right-0`}></div>
      <div className="text-center text-white w-3/5 m-auto relative sm:w-4/5">
        <h1 className="text-5xl font-lighter tracking-wider">{header}</h1>
        <p className="text-lg">{note}</p>
      </div>
      <div className="flex gap-x-2 items-center justify-center m-auto mt-8 font-thin font-lighter border-2 border-solid border-white-300 w-48 py-4  sm:w-1/2 text-white">
        <MdRestaurantMenu size={20} />
        <p>CHECK OUT MENU</p>
      </div>
    </div>
  )
};

export default MealCaption;