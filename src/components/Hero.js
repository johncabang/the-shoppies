import React from "react";
import Heading from "./Heading";
import SearchBar from "./SearchBar";

function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2840&q=80")`,
        height: "220px",
        backgroundSize: "cover",
        objectFit: "fil",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.75)",
      }}
    >
      <Heading heading="the shoppies" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default Hero;
