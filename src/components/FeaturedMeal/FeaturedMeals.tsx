import React from "react";
import FeaturedMeal from "./FeaturedMeal";
import { SiCodechef } from "react-icons/si";

const FeaturedMeals: React.FC = () => {
    return (
        <section className="w-full pt-12">
            <div className="grid justify-items-center">
                <SiCodechef size={50} />
                <h1 className="text-deepRed font-lighter text-3xl tracking-wider">HOT DISHES</h1>
            </div>
            <div className="grid grid-cols-4 justify-items-center pt-12 sm:grid-cols-1 sm:gap-y-12">
                <FeaturedMeal />
                <FeaturedMeal />
                <FeaturedMeal />
                <FeaturedMeal />
            </div>
        </section>
    )
};

export default FeaturedMeals;