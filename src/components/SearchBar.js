import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "20vh",
    paddingBottom: "5vh",
    width: "100vh",
    "& label.Mui-focused": {
      color: "secondary",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "secondary",
      },
    },
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <Grid container xs={12}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-secondary"
          label="Search Movies"
          variant="outlined"
          size="small"
          value={props.value}
          fullWidth
          onChange={(event) => props.setSearchTerm(event.target.value)}
          InputProps={{
            style: {
              color: "#fff",
            },
          }}
          InputLabelProps={{
            style: { color: "#fff" },
            shrink: true,
          }}
        />
      </form>
    </Grid>
  );
}

export default SearchBar;
