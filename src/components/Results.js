import React from "react";
import OutlinedButton from "./OutlinedButton";

import "./Results.css";

function Results(props) {
  const { results } = props;

  return (
    <div>
      <h3>Results</h3>
      {results.map((result) => (
        <div className="results__component">
          <img src={result.Poster} alt="movie" />
          <h4>
            {result.Title} ({result.Year})
          </h4>

          <OutlinedButton>Nominate</OutlinedButton>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Results;
