import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 350,
    minWidth: 550,
    minHeight: 600,
    background: "black",
    color: "white",
    paddingTop: 20,
    padding: 40,
    borderRadius: 0,
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
    color: "white",
  },
  actions: {
    padding: 0,
  },
  images: {
    width: "30vh",
  },
});

function Results(props) {
  const NominateComponent = props.nominateComponent;

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      {props.searchTerm ? (
        <h2>Results for "{props.searchTerm}"</h2>
      ) : (
        <h2>Movies</h2>
      )}

      {/* {props.searchTerm && !result.length ? (
        <p className="status-text">No Results Found</p>
      ) : ( */}
      <CardContent>
        {props.results.map((result) => (
          <div className="results__movie">
            {/* <img src={result.Poster} alt="movie" className={classes.images} /> */}

            <Typography component="h2">{result.Title}</Typography>
            <Typography className={classes.pos}>({result.Year})</Typography>

            <div
              className="results__nominate"
              onClick={() => props.handleNominatedClick(result)}
            >
              <CardActions className={classes.actions}>
                <NominateComponent />
              </CardActions>
              <br />
            </div>
            <br />
          </div>
        ))}
      </CardContent>
      {/* )} */}
    </Card>
  );
}

export default Results;

//       <Grid item xs={12}>
// {props.results.map((result) => (
//   <div className="results__movie">
//     <img src={result.Poster} alt="movie" />
//     <h4>
//       {result.Title} ({result.Year})
//     </h4>
//     <div
//       className="results__nominate"
//       onClick={() => props.handleNominatedClick(result)}
//     >
//       <NominateComponent />
//     </div>
//     <br />
//   </div>
// ))}
//       </Grid>
//     </div>
//   );
// }

// return (
//   <div className={classes.root}>
//     <Grid container spacing={4}>
//       <Grid container item xs={12} spacing={0} justify="space-evenly">
//         <FormRow />
//       </Grid>
//     </Grid>
//   </div>
// );
