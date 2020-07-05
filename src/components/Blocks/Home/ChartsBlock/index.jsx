import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ChartSelector from "../../../ChartSelector";
import LineChart from "../../../LineChart";

const ChartsBlock = () => {
  return (
    <Grid style={{ marginTop: "3rem" }} item xs={12} sm={12} md={12} lg={12}>
      <Typography style={{ marginBottom: "2rem" }} variant="h3">
        Charts
      </Typography>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={12} md={5}>
          <ChartSelector />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <LineChart />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChartsBlock;
