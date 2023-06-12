import React from "react";
import Navbar from "../layout/Navbar/Navbar";


const Header: React.FC = () => {
    return (
        <header className="header-bg">
            <Navbar />
            <div className="m-auto w-1/2 text-whiteColor pb-10 relative sm:w-4/5">
                <h1 className="font-bold text-5xl text-tangerineYellow font-serif sm:text-4xl">Are you hundry?</h1>
                <h2 className="font-lighter text-4xl tracking-wide">Don't wait!!!</h2>
                <h2 className="font-lighter text-4xl tracking-wide">Let's Start to order food now!</h2>
            </div>
            <div className="font-thin font-lighter border-2 border-solid border-white-300 w-48 ml-[21rem] p-4 sm:ml-8 sm:w-1/2 text-white">
                CHECK OUT MENU
            </div>
        </header>
    )
};

export default Header;