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
});

function NomineesList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Typography variant="h5">Nominees</Typography>

      <CardContent>
        {props.results.map((result) => (
          <div className="results__movie">
            {/* <img src={result.Poster} alt="movie" className={classes.images} /> */}

            <Typography className={classes.title}>{result.Title}</Typography>
            <Typography className={classes.pos}>({result.Year})</Typography>
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
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default NomineesList;
