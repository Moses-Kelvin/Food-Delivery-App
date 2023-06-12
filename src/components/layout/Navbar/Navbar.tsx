import DropDown from "@src/components/UI/DropDown/DropDownl";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Navbar: React.FC = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            {showDropdown && <DropDown />}
            <nav className="grid grid-cols-2 px-20 py-10 sm:px-4">
                <h1 className="text-whiteColor text-4xl sm:text-3xl font-mono">KelFoods</h1>
                <div className="flex gap-x-5  items-center justify-self-end">
                    <div className="relative">
                        <div className="bg-tangerineYellow absolute -top-3 left-5 w-6 h-8 text-whiteColor rounded-full grid items-center justify-center">1</div>
                        <BsFillCartFill size={30} style={{ fill: 'white' }} />
                    </div>
                    <MdAccountCircle size={40} style={{ fill: 'white' }} />
                    {!showDropdown && <CiMenuFries
                        onClick={() => setShowDropdown(true)}
                        size={30} style={{ fill: 'white' }} />}
                       {showDropdown && <RxCross1
                        onClick={() => setShowDropdown(false)}
                        size={30} style={{ color: 'white' }} />}
                </div>
            </nav>
        </>
    )
};

export default Navbar;