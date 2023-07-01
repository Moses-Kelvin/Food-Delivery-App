import React from "react";

const ChangePassword = () => {
    return (
        <form className="w-full card sm:mb-12">
          <h1 className="text-goldColor mb-4 text-xl font-thin">CHANGE PASSWORD</h1>
            <div className="group">
                <input type="password" name="from_name" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="font-thin font-lighter font-sm">Old Password</label>
            </div>

            <div className="group">
                <input type="password" name="from_email" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="font-thin font-lighter font-sm">New Password</label>
            </div>
            <button type="submit" className="bg-white text-lg px-8 py-2 text-deepRed rounded-md">Change</button>
        </form>
    )
};

export default ChangePassword;