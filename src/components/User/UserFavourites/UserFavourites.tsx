import React from "react";
import UserFavouriteCard from "./UserFavouriteCard";

const UserFavourites = () => {
    return (
        <section className="border-lightBlue border-2 border-solid w-4/5 h-full rounded-lg shadow-xl">
            <h1 className="text-white font-thin tracking-wider text-md py-4 ml-4 sm:text-deepRed sm:font-bold">FAVOURITES</h1>
            <div className="pt-8 grid grid-cols-2 gap-y-12 justify-items-center scroller max-h-[30rem] sm:grid-cols-1 sm:gap-y-16">
                <UserFavouriteCard />
                <UserFavouriteCard />
                <UserFavouriteCard />
                <UserFavouriteCard />
                <UserFavouriteCard />
                <UserFavouriteCard />
                <UserFavouriteCard />
            </div>
        </section>
    )
};

export default UserFavourites;