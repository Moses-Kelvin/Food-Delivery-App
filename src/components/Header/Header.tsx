import React from "react";
import { MdRestaurantMenu } from "react-icons/md";


const Header = () => {
    return (
        <header className="header-bg">
            <div className="m-auto w-1/2 text-whiteColor pb-10 sm:w-4/5 mt-[6rem] pt-28">
                <h1 className="font-bold text-5xl text-tangerineYellow font-serif sm:text-4xl">Are you hundry?</h1>
                <h2 className="font-lighter text-4xl tracking-wide">Don't wait!!!</h2>
                <h2 className="font-lighter text-4xl tracking-wide">Let's Start to order food now!</h2>
            </div>
            <div className="flex gap-x-2 items-center justify-center font-thin font-lighter border-2 border-solid border-white-300 w-48 ml-[21rem] py-4 sm:ml-8 sm:w-1/2 text-white">
                <MdRestaurantMenu size={20} />
                <p>CHECK OUT MENU</p>
            </div>
        </header>
    )
};

export default Header;