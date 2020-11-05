import React, { useState, useEffect } from "react";
import M from "materialize-css";
import Hero from "../components/Hero";
import SearchCard from "../components/SearchCard";
import { CardPanel, TextInput, Button, Icon } from "react-materialize";



//M.AutoInit();
const Search = () => {
    return (
        <div>
            <Hero />
            <SearchCard />
        </div>
    )
}

export default Search;