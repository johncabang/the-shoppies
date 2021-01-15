import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      textTransform: "none",
      borderRadius: "0",
    },
  },
}));

function NominateButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary">
        Nominate
      </Button>
    </div>
  );
}

export default NominateButton;
