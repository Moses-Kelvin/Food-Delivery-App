import React from "react";

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
    </div>
  )
};

export default MealCaption;