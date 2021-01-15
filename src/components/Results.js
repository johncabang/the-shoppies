import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minHeight: 775,
    background: "#012E25",
    color: "#fff",
    padding: 40,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
  },
  year: {
    marginBottom: 12,
    color: "white",
  },
  actions: {
    padding: 0,
  },
  images: {
    width: "30vh",
  },
});

function Results(props) {
  const classes = useStyles();

  function SearchResults() {
    return (
      <CardContent elevation={6}>
        {props.results.map((result) => {
          const storedMovie = props.nominees.find(
            (stored) => stored.imdbID === result.imdbID
          );
          return (
            <div className="results__movie">
              <CardMedia image={result.Poster} />
              <li key={result.id} style={{ listStyle: "none" }}>
                <Typography className={classes.title}>
                  {result.Title}
                </Typography>
                <Typography className={classes.year}>
                  ({result.Year})
                </Typography>

                <CardActions className={classes.actions}>
                  <Button
                    onClick={() => props.handleNominatedClick(result)}
                    variant="outlined"
                    color="primary"
                    disabled={
                      storedMovie || props.nominees.length === 5 ? true : false
                    }
                    style={{ textTransform: "none", borderRadius: "0" }}
                  >
                    {storedMovie ? "Nominated" : "Nominate"}
                  </Button>
                </CardActions>
                <br />
                <br />
              </li>
            </div>
          );
        })}
      </CardContent>
    );
  }

  return (
    <Card className={classes.root} variant="outlined">
      {props.searchTerm ? (
        <Typography variant="h5">Results for "{props.searchTerm}"</Typography>
      ) : (
        <Typography variant="h5">Movies</Typography>
      )}

      {props.searchTerm && !SearchResults ? (
        <Typography variant="h5">No Results Found</Typography>
      ) : (
        <SearchResults />
      )}
    </Card>
  );
}

export default Results;
