import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      textTransform: "none",
      borderRadius: "0",
    },
  },
}));

function RemoveNominee() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary">
        Remove
      </Button>
    </div>
  );
}

export default RemoveNominee;
