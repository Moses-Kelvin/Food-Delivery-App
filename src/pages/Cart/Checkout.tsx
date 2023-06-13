import CartLayout from "@src/components/layout/CartLayout";
import Image from "next/image";
import React from "react";
import card2 from "../../assets/Images/card2.png";

const Checkout = () => {
    return (
        <CartLayout>
            <section className="bg-deepRed h-full">
                <h1 className="font-thin font-lighter text-white text-2xl tracking-wider pt-12 pl-8">CHECKOUT</h1>
                <Image src={card2} alt="" className="-translate-x-24 -translate-y-20" />
                <form className="-translate-y-32 pl-4 w-full grid">
                    <div className="group">
                        <input type="text" name="from_name" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>
                    </div>

                    <div className="group">
                        <input type="email" name="from_email" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="font-thin font-lighter font-sm">Card Number</label>
                    </div>
                    <button type="submit" className="bg-tangerineYellow m-auto text-lg text-deepRed rounded-md w-3/5 py-2">Submit</button>
                </form>




            </section>
        </CartLayout>
    )
}

export default Checkout;