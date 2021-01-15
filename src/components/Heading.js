import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Heading(props) {
  return (
    <Grid container item xs={12}>
      <Typography
        variant="h4"
        style={{ color: "#fff", paddingTop: "10vh", paddingLeft: "15%" }}
      >
        {props.heading}
      </Typography>
    </Grid>
  );
}

export default Heading;
