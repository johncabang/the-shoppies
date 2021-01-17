import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2vh",
    paddingBottom: "2vh",
    color: "#fff",
    background: "linear-gradient(to right bottom, #093028, #237A57)",
    borderRadius: 0,
    width: "100%",
    position: "relative",
    zIndex: 10,
  },
  title: {
    fontSize: 14,
  },
});

function Banner() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <Typography variant="h6">YOU HAVE 5 NOMINATIONS!</Typography>
          <Typography className={classes.title} component="p">
            Remove some nominations from the right-hand list if you change your
            mind.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Banner;
