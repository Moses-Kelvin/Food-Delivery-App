import SearchInput from "@src/components/Search/SearchInput";
import SearchResults from "@src/components/Search/SearchResults";
import React from "react";
 

const Search = () => {
    return (
        <section className="w-full mt-32">
            <SearchInput />
            <SearchResults />
        </section>
    )
};

export default Search;


