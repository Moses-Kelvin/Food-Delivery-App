import React from "react";
import FeaturedMeal from "./FeaturedMeal";
import { SiCodechef } from "react-icons/si";
import { cartData } from "@src/utils/CartData";

const FeaturedMeals = () => {
    return (
        <section className="w-full pt-12">
            <div className="grid justify-items-center">
                <SiCodechef size={50} />
                <h1 className="text-deepRed font-lighter text-3xl tracking-wider">HOT DISHES</h1>
            </div>
            <div className="grid grid-cols-4 justify-items-center pt-12 sm:grid-cols-1 sm:gap-y-12">
                {cartData.slice(4, 8).map(data =>
                    <FeaturedMeal data={data} key={data.id} />
                )}

            </div>
        </section>
    )
};

export default FeaturedMeals;