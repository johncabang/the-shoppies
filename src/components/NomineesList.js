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
    // background: "linear-gradient(to right bottom, #093028, #237A57)",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(4px)",
    color: "#000",
    padding: 30,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginTop: 12,
    fontSize: 14,
  },
  year: {
    marginBottom: 12,
    color: "#000",
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
                <DeleteIcon variant="outlined" color="secondary" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      ))}
    </Card>
  );
}

export default NomineesList;
