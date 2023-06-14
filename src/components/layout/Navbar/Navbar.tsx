import DropDown from "@src/components/UI/DropDown/DropDownl";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            {showDropdown && <DropDown />}
            <nav className="grid grid-cols-2 px-20 py-8 sm:px-4">
                <h1 className="text-deepRed text-4xl sm:text-3xl font-mono">KelFoods</h1>
                <div className="flex gap-x-5  items-center justify-self-end">
                    <div className="relative">
                        <div className="bg-tangerineYellow absolute -top-3 left-5 w-6 h-8 text-whiteColor rounded-full grid items-center justify-center">1</div>
                        <BsFillCartFill size={30} style={{ color: '#8E0D3C' }} />
                    </div>
                    <MdAccountCircle size={40} style={{ color: '#8E0D3C' }} />
                    {!showDropdown && <CiMenuFries
                        onClick={() => setShowDropdown(true)}
                        size={30} style={{ color: '#8E0D3C' }} />}
                       {showDropdown && <RxCross1
                        onClick={() => setShowDropdown(false)}
                        size={30} style={{ color: '#8E0D3C' }} />}
                </div>
            </nav>
        </>
    )
};

export default Navbar;