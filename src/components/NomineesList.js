import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: 775,
    background: "#014C3E",
    color: "#fff",
    padding: 40,
    borderRadius: 10,
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
});

function NomineesList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Typography variant="h5">Nominations</Typography>

      <CardContent>
        {props.results.map((result) => (
          <div className="results__movie">
            <li key={result.id} style={{ listStyle: "none" }}>
              {/* <img src={result.Poster} alt="movie" className={classes.images} /> */}

              <Typography className={classes.title}>{result.Title}</Typography>
              <Typography className={classes.year}>({result.Year})</Typography>
              <CardActions className={classes.actions}>
                <Button
                  onClick={() => props.handleNominatedClick(result)}
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: "none", borderRadius: "0" }}
                >
                  Remove
                </Button>
              </CardActions>
              <br />
              <br />
            </li>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default NomineesList;
