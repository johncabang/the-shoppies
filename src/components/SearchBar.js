import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5vh",
    paddingBottom: "5vh",
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
  search: {
    // width: "100%",
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.search}
            id="outlined-secondary"
            label="Search Movie Title"
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
    </Grid>
  );
}

export default SearchBar;
