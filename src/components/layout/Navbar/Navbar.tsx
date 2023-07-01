import DropDown from "@src/components/UI/DropDown/DropDownl";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            {showDropdown && <DropDown />}
            <nav className="grid grid-cols-2 px-20 py-8 sm:px-4">
                {!showDropdown && <HiMenuAlt2
                    onClick={() => setShowDropdown(true)}
                    size={40} style={{ color: '#8E0D3C' }} />}
                {showDropdown && <RxCross1
                    onClick={() => setShowDropdown(false)}
                    size={30} style={{ color: '#8E0D3C' }} />}
                <div className="flex gap-x-5  items-center justify-self-end">
                    <Link href="/Search">
                        <FaSearch size={25} style={{ color: '#8E0D3C' }} />
                    </Link>
                    <Link href="/Cart">
                        <div className="relative">
                            <div className="bg-tangerineYellow absolute -top-3 left-5 w-6 h-8 text-whiteColor rounded-full grid items-center justify-center">1</div>
                            <BsFillCartFill size={30} style={{ color: '#8E0D3C' }} />
                        </div>
                    </Link>
                    <Link href="/User">
                        <MdAccountCircle size={40} style={{ color: '#8E0D3C' }} />
                    </Link>
                </div>
            </nav>
        </>
    )
};

export default Navbar;