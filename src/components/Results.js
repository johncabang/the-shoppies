import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minHeight: 775,
    background: "#012E25",
    color: "#fff",
    padding: 30,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    // marginTop: 12,
    paddingTop: 0,
    fontSize: 12,
  },
  year: {
    marginBottom: 12,
    color: "white",
    paddingBottom: 12,
    fontSize: 12,
  },
  actions: {
    padding: 0,
    paddingBottom: 20,
  },
  images: {
    width: "20vh",
  },
});

function Results(props) {
  const classes = useStyles();

  function SearchResults() {
    return (
      <CardContent className={classes.content}>
        {props.results.map((result) => {
          const storedMovie = props.nominees.find(
            (stored) => stored.imdbID === result.imdbID
          );
          return (
            <div className="results__movie">
              {/* <CardMedia image={result.Poster} /> */}
              {/* <img src={result.Poster} alt="movie" className={classes.images} /> */}
              {/* <li key={result.id} style={{ listStyle: "none" }}> */}
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography className={classes.title}>
                    {result.Title}
                  </Typography>
                  <Typography className={classes.year}>
                    ({result.Year})
                  </Typography>
                </Box>
                {/* <CardActions className={classes.actions}> */}
                <Box alignContent="center">
                  <Button
                    onClick={() => props.handleNominatedClick(result)}
                    variant="outlined"
                    color="primary"
                    disabled={
                      storedMovie || props.nominees.length === 5 ? true : false
                    }
                    style={{
                      textTransform: "none",
                      borderRadius: "0",
                    }}
                  >
                    {storedMovie ? "Nominated" : "Nominate"}
                  </Button>
                  {/* </CardActions> */}
                </Box>
              </Box>
              {/* </li> */}
            </div>
          );
        })}
      </CardContent>
    );
  }

  return (
    <Card className={classes.root} variant="outlined">
      {props.searchTerm ? (
        <Typography variant="h6">Results for "{props.searchTerm}"</Typography>
      ) : (
        <Typography variant="h6">Movies</Typography>
      )}

      {props.searchTerm && !SearchResults ? (
        <Typography variant="h6">No Results Found</Typography>
      ) : (
        <SearchResults />
      )}
    </Card>
  );
}

export default Results;
