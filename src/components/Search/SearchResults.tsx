import React from "react";
import SearchResult from "./SearchResult";
import SearchFilter from "./SearchFilter";

const SearchResults = () => {
    return (
        <section className="w-3/4 m-auto bg-white rounded-lg shadow-xl py-8 mt-12 sm:w-[90%]">
            <SearchFilter />
            <div className="grid gap-y-4">
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
            </div>
        </section>
    )
};

export default SearchResults;