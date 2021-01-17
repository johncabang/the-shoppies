import React from "react";
import Heading from "./Heading";
import SearchBar from "./SearchBar";

function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{
        // backgroundImage: `url("https://images.pexels.com/photos/2098578/pexels-photo-2098578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
        backgroundColor: "#000",
        height: "220px",
        backgroundSize: "cover",
        objectFit: "fill",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Heading heading="the shoppies" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default Hero;
