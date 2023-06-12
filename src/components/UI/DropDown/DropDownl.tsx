import React, { ReactNode, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";


const DropDown: React.FC = () => {
    return (
        <div className="w-full grid justify-items-center">
            <div className="bg-backdrop text-whiteColor fixed top-24 w-4/5 h-60 z-50">
                <ul className="font-lighter list-none text-2xl font-sans tracking-wider pl-6">
                    <li className="mt-4">Home</li>
                    <li className="mt-2">About</li>
                    <li className="mt-2">Menu</li>
                    <li className="mt-2">Cart</li>
                    <li className="mt-2">Contact</li>
                </ul>
            </div>
        </div>
    )
};


export default DropDown;

