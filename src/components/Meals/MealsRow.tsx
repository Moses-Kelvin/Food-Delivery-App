import React from "react";
import MealCard from "./MealCard";

const MealsRow = () => {
    return (
        <div className="horizontalScroll py-16">
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
    )
};

export default MealsRow;