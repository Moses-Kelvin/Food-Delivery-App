import Map from "@src/components/Map/Map";
import React, { PropsWithChildren } from "react";
import CartItem from "../Cart/CartItem";


const CartLayout = ({ children }: PropsWithChildren) => {
    return (
        <section className="grid grid-cols-[6.5fr_3.5fr] mt-32 w-[90%] m-auto bg-white shadow-xl sm:grid-cols-1">
            <div className="py-8 w-full">
                <h1 className="font-thin font-lighter text-black text-2xl tracking-wider pt-2 pb-12 pl-12 sm:text-xl sm:pt-0 sm:pl-4">SHOPING CART</h1>
                <div className="grid gap-y-8 pl-16 pr-28 sm:pl-2 sm:pr-0 sm:mr-2">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="flex gap-x-4 items-center justify-end mr-28 mt-4 sm:mr-12">
                    <h2 className="text-lg font-bold">Total</h2>
                    <h1 className="font-bold text-2xl sm:text-xl">$800.85</h1>
                </div>
            </div>
            <>{children}</>
        </section>

    )
};

export default CartLayout;