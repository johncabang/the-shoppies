import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minHeight: 520,
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(10px)",
    color: "#000",
    padding: 30,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    paddingTop: 0,
    fontSize: 14,
  },
  year: {
    marginBottom: 12,
    color: "#000",
    paddingBottom: 12,
    fontSize: 12,
  },
  actions: {
    padding: 0,
    paddingBottom: 20,
  },
});

function Results(props) {
  const classes = useStyles();

  function SearchResults() {
    return props.results.map((result, index) => {
      const storedMovie = props.nominees.find(
        (stored) => stored.imdbID === result.imdbID
      );
      return (
        <CardContent key={index}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography className={classes.title}>{result.Title}</Typography>
              <Typography className={classes.year}>({result.Year})</Typography>
            </Box>
            <Box alignContent="center">
              <Button
                onClick={() => props.handleNominatedClick(result)}
                variant="outlined"
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
            </Box>
          </Box>
        </CardContent>
      );
    });
  }

  return (
    <Card className={classes.root} variant="outlined">
      {props.searchTerm ? (
        <Typography variant="h6">Results for "{props.searchTerm}"</Typography>
      ) : (
        <Typography variant="h6">Movies</Typography>
      )}
      <SearchResults />
    </Card>
  );
}

export default Results;
