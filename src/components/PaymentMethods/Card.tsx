import React from "react";
import card2 from "../../assets/Images/card3.png";
import Image from "next/image";

const Card = () => {
    return (
        <section className="bg-deepRed h-full sm:row-start-1 sm:row-end-3 sm:pb-8">
            <h1 className="font-thin font-lighter text-white text-2xl tracking-wider pt-8 pl-8 sm:text-xl">CHECKOUT</h1>
            <Image src={card2} alt="" className="shadow-xl -translate-x-12 w-[90%] my-8 h-48 sm:-translate-x-2 sm:h-40 sm:w-4/5" />
            <form className="pl-4 w-full grid card">
                <div className="group">
                    <input type="text" name="from_name" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="font-thin font-lighter font-sm">Name</label>
                </div>

                <div className="group">
                    <input type="email" name="from_email" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="font-thin font-lighter font-sm">Card Number</label>
                </div>
                <button type="submit" className="bg-white m-auto text-lg text-deepRed rounded-md w-3/5 sm:w-4/5 py-2">Pay</button>
            </form>
        </section>
    )
};

export default Card;