import React from "react";
import UserProfileLayout from "@src/components/layout/UserProfileLayout";
import UserPersonalDetails from "@src/components/User/UserPersonalDetails";
import UserAddresses from "@src/components/User/UserAddresses";
import UserFavourites from "@src/components/User/UserFavourites/UserFavourites";

const User = () => {
    return (
        <UserProfileLayout>
            <section className="grid grid-cols-2 justify-items-center pt-12 w-full sm:grid-cols-1 sm:gap-y-8">
                <div className="w-full grid gap-y-8 justify-items-center">
                    <UserPersonalDetails />
                    <UserAddresses />
                </div>
                <UserFavourites />
            </section>
        </UserProfileLayout>
    )
};

export default User;