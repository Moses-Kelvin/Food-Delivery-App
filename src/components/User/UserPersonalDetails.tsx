import React from "react";
import { ImPhone, ImProfile } from "react-icons/im";

const UserPersonalDetails = () => {
    return (
        <section className="bg-bodyBlue w-4/5 h-fit py-8 rounded-lg shadow-xl">
            <h1 className="text-deepRed font-bold tracking-wider text-md ml-4 sm:text-deepRed sm:font-bold">PERSONAL DETAILS</h1>
                <div className="bg-deepRed text-white px-8 py-4 rounded-[3rem] w-4/5 m-auto mt-4">
                    <p className="font-bold">Name</p>
                    <h2 className="text-sm">Moses23</h2>
                </div>
                <div className="bg-deepRed text-white px-8 py-4 rounded-[3rem] w-4/5 m-auto mt-4">
                    <p className="font-bold">Phone</p>
                    <h2 className="text-sm">08108989321</h2>
                </div>
            <div className="bg-deepRed text-white w-4/5 rounded-[3rem] m-auto pl-6 py-4 mt-4">
                <p className="font-bold">Email</p>
                <h2 className="text-sm">moseskelvin683@gmail.com</h2>
            </div>
        </section>
    )
};

export default UserPersonalDetails;