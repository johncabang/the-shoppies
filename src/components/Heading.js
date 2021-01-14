import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    color: "white",
    paddingLeft: "20vh",
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },
});

function Heading(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container xs={12}>
      <Typography variant="h5" component="h2">
        {props.heading}
      </Typography>
    </Grid>
  );
}

export default Heading;
