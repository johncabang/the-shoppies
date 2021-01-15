import React from "react";
import Heading from "./Heading";

import SearchBar from "./SearchBar";
import "./Hero.css";

function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div className="hero">
      <Heading heading="The Shoppies" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default Hero;
