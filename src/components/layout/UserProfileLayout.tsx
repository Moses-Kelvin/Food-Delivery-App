import React, { PropsWithChildren } from "react";
import UserProfileHeader from "../User/UserProfileHeader";


const UserProfileLayout = ({ children }: PropsWithChildren) => {
    return (
        <section className="w-4/5 bg-deepRed shadow-xl mt-32 rounded-lg h-fit m-auto py-8 sm:w-[100%] sm:shadow-none sm:bg-bodyBlue">
            <UserProfileHeader />
            <>{children}</>
        </section>
    )
};

export default UserProfileLayout;