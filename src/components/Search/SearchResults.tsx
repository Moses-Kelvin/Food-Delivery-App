import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = () => {
    return (
        <section className="w-3/4 m-auto bg-white rounded-lg shadow-xl py-8 mt-12 grid gap-y-4 sm:w-[90%]">
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
        </section>
    )
};

export default SearchResults;