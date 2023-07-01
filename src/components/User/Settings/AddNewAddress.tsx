import React from "react";

const AddNewAddress = () => {
    return (
        <form className="w-full card">
             <h1 className="text-goldColor mb-4 text-xl font-thin">ADD ADDRESS</h1>
            <div className="group">
                <input type="text" name="from_name" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="font-thin font-lighter font-sm">New Address</label>
            </div>
            <button type="submit" className="bg-white text-lg text-deepRed px-8 py-2 rounded-md">Add</button>
        </form>
    )
};

export default AddNewAddress;