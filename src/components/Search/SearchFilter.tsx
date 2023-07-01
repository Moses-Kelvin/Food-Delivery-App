import React from "react";

const menu = ["Jollof Rice", "Swallow", "Yam & Plantain", "Proteins", "Shawarma/Fingerbites", "Soup Bowls", "Fried Rice", "Burger", "Beans", "Drinks", "Economy Pack"];

const SearchFilter = () => {
    return (
        <div className="flex gap-x-4 w-[70%] flex-wrap gap-y-4 m-auto pb-8 sm:w-4/5">
            {menu.map((meal, index) =>
                <div key={index} className="rounded-xl text-center bg-lightRed border-2 border-solid border-deepRed text-deepRed px-2 py-1">
                    {meal}
                </div>
            )}
        </div>
    )
};

export default SearchFilter;