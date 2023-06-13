import React from "react";

const menu = ["Jollof Rice", "Swallow", "Yam & Plantain", "Proteins", "Shawarma/Fingerbites", "Soup Bowls", "Fried Rice", "Burger", "Beans", "Drinks", "Economy Pack"];

const MenuList = () => {

    return (
        <section className="w-full pt-16">
            <h1 className="font-thin w-1/2 m-auto border-b-2 border-b-deepRed-800 border-b-solid font-lighter tracking-widest text-3xl text-deepRed text-center pb-4">
                MENU
            </h1>
            <div className="horizontalScroll text-white">
                {menu.map((meal, id) =>
                    <div key={id} className="rounded-lg bg-lightGray w-fit px-4 py-2 shadow-sm">
                        {meal}
                    </div>
                )}
            </div>
        </section>
    )
};

export default MenuList;