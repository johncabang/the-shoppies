import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 350,
    minWidth: 550,
    minHeight: 600,
    background: "black",
    color: "white",
    paddingTop: 20,
    padding: 40,
    borderRadius: 0,
  },
  title: {
    fontSize: 14,
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
  const NominateComponent = props.nominateComponent;

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      {/* <Heading heading="Nominees" /> */}
      <h2>Nominees</h2>

      <CardContent>
        {props.results.map((result) => (
          <div className="results__movie">
            <Typography variant="h5" component="h2">
              {result.Title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ({result.Year})
            </Typography>
            <div
              className="results__nominate"
              onClick={() => props.handleNominatedClick(result)}
            >
              <CardActions className={classes.actions}>
                <NominateComponent />
              </CardActions>
              <br />
            </div>
            <br />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default NomineesList;
