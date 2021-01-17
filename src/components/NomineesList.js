import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 520,
    background: "#014C3E",
    color: "#fff",
    padding: 30,
    borderRadius: 10,
  },
  title: {
    marginTop: 12,
    fontSize: 12,
  },
  year: {
    marginBottom: 12,
    color: "white",
    fontSize: 12,
  },
  actions: {
    padding: 0,
    paddingBottom: 20,
  },
});

function NomineesList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Typography variant="h6">Nominations</Typography>
      {props.results.map((result, index) => (
        <CardContent key={index}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography className={classes.title}>{result.Title}</Typography>
              <Typography className={classes.year}>({result.Year})</Typography>
            </Box>
            <Box>
              <IconButton onClick={() => props.handleNominatedClick(result)}>
                <DeleteIcon variant="outlined" color="primary" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      ))}
    </Card>
  );
}

export default NomineesList;
