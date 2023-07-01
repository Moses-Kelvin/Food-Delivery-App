import React from "react";

const UserAddresses = () => {
  return (
    <section className="border-lightBlue border-2 border-solid w-4/5 h-fit py-4 rounded-lg sm:bg-deepRed sm:border-0 sm:shadow-xl">
      <h1 className="text-white font-thin tracking-wider text-md mt-4 ml-4 sm:font-bold">ADDRESSES</h1>
      <div className="grid grid-cols-2 justify-items-center gap-y-8 pt-4 sm:grid-cols-1 sm:justify-items-start sm:gap-y-4 sm:pl-4">
        {[1, 2, 3, 4].map((adr, index) =>
          <details key={index} className="text-bodyBlue">
            <summary>Address {adr}</summary>
            <p>xx xx xxxxx xxxx xxxxx</p>
          </details>
        )}
      </div>
    </section>
  )
};

export default UserAddresses;