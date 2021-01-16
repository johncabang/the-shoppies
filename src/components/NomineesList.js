import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 775,
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

      <CardContent className={classes.content}>
        {props.results.map((result) => (
          <div className={classes.content}>
            <Box display="flex" justifyContent="space-between">
              {/* <li key={result.id} style={{ listStyle: "none" }}> */}
              {/* <img src={result.Poster} alt="movie" className={classes.images} /> */}
              <Box>
                <Typography className={classes.title}>
                  {result.Title}
                </Typography>
                <Typography className={classes.year}>
                  ({result.Year})
                </Typography>
              </Box>
              {/* <CardActions className={classes.actions}> */}
              <Box>
                <IconButton>
                  <DeleteIcon
                    onClick={() => props.handleNominatedClick(result)}
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: "none", borderRadius: "0" }}
                  />
                </IconButton>
              </Box>
              {/* </CardActions> */}
              {/* </li> */}
            </Box>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default NomineesList;
