import React from "react";
import Heading from "./Heading";
import SearchBar from "./SearchBar";

function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "200px",
        backgroundSize: "cover",
        objectFit: "fill",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Heading heading="the shoppies" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default Hero;
