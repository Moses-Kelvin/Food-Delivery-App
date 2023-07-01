import React from "react";
import MealCard from "./MealCard";
import { cartData } from "@src/utils/CartData";

const MealsRow = () => {
  return (
    <div className="horizontalScroll py-16">
      {cartData.map(data =>
        <MealCard data={data} key={data.id} />
      )}

    </div>
  )
};

export default MealsRow;