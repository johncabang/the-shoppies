import React from "react";
import { Grid, Typography } from "@material-ui/core/";

function Heading(props) {
  return (
    <Grid container item xs={12}>
      <Typography
        variant="h4"
        style={{
          color: "#fff",
          paddingTop: "5vh",
          paddingLeft: "15%",
          fontWeight: "bold",
        }}
      >
        {props.heading}
      </Typography>
    </Grid>
  );
}

export default Heading;
