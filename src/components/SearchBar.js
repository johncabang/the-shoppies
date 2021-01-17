import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5vh",
    paddingBottom: "10vh",
    paddingLeft: "15%",
    paddingRight: "15%",
    "& label.Mui-focused": {
      color: "secondary",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
        color: "#fff",
      },
    },
  },
  search: {
    width: "100%",
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
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
