import React from "react";
import OutlinedButton from "./OutlinedButton";

function Results(props) {
  const { results } = props;

  return (
    <div>
      <h3>Results</h3>
      {results.map((result) => (
        <div className="results">
          <img src={result.Poster} alt="movie" />
          <OutlinedButton />
        </div>
      ))}
    </div>
  );
}

export default Results;
