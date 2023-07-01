import React from "react";

const UpdatePersonalDetails = () => {
    return (
        <form className="w-full card ml-16 sm:ml-4">
             <h1 className="text-goldColor mb-4 text-xl font-thin">UPDATE DETAILS</h1>
            <div className="group">
                <input type="text" name="from_name" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="font-thin font-lighter font-sm">New Username</label>
            </div>

            <div className="group">
                <input type="text" name="from_email" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="font-thin font-lighter font-sm">New Email</label>
            </div>

            <div className="group">
                <input type="number" name="from_email" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="font-thin font-lighter font-sm">Phone</label>
            </div>
            <button type="submit" className="bg-white text-lg text-deepRed px-8 py-2 rounded-md">Update</button>
        </form>
    )
};

export default UpdatePersonalDetails;