import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
   return (
      <footer className="grid grid-cols-4 items-center justify-items-center text-white py-8 mt-20 sm:grid-cols-1">
         <div className="flex gap-x-4">
            <BsTwitter size={25} fill="deepRed" />
            <BsWhatsapp size={25} fill="deepRed" />
            <BsGithub size={25} fill="deepRed" />
            <BsLinkedin size={25} fill="deepRed" />
         </div>
         <p className="text-black text-lg">© Kelvin Moses</p>
         <h1 className="font-bold text-2xl">KelFoods</h1>
         <div className="text-black flex gap-x-8">
            <h1 className="font-lighter text-lg">Menu</h1>
            <h1 className="font-lighter text-lg">Chat</h1>
            <h1 className="font-lighter text-lg">Contact Us</h1>
         </div>
      </footer>
   )
};

export default Footer;