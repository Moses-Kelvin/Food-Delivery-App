import AddNewAddress from "@src/components/User/Settings/AddNewAddress";
import ChangePassword from "@src/components/User/Settings/ChangePassword";
import UpdatePersonalDetails from "@src/components/User/Settings/UpdatePersonalDetails";
import UserProfileLayout from "@src/components/layout/UserProfileLayout";
import React from "react";

const Settings = () => {
    return (
        <UserProfileLayout>
            <section className="w-[90%] mt-12 bg-deepRed sm:mx-auto rounded-lg sm:shadow-xl py-12">
                {/* <h1 className="font-bold text-xl text-lightBlue py-8 pl-8">Settings</h1> */}
                <div className="flex justify-center w-[90%] m-auto mb-12 sm:flex-col">
                    <ChangePassword />
                    <AddNewAddress />
                </div>
                <UpdatePersonalDetails />
            </section>
        </UserProfileLayout>
    )
};

export default Settings;