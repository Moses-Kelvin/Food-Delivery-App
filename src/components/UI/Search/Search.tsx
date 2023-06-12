import React from "react";
import { CiSearch } from "react-icons/ci";

const Search: React.FC = () => {
   return (
      <form className="w-1/2 m-auto sm:w-4/5">
         <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <CiSearch size={20} />
            </div>
            <input type="search" id="search" className="block w-full focus:outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl dark:placeholde" placeholder="Find your favourite food..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-deepRed  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
         </div>
      </form>
   )
};

export default Search;


 