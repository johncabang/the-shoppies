import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minHeight: 600,
    background: "black",
    color: "white",
    padding: 40,
    borderRadius: 0,
    margin: 0,
  },
  title: {
    fontSize: 18,
  },
  pos: {
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
      <CardContent>
        {props.results.map((result) => {
          const storedMovie = props.nominees.find(
            (stored) => stored.imdbID === result.imdbID
          );
          return (
            <div className="results__movie">
              {/* <img src={result.Poster} alt="movie" className={classes.images} /> */}

              <Typography className={classes.title}>{result.Title}</Typography>
              <Typography className={classes.pos}>({result.Year})</Typography>

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
