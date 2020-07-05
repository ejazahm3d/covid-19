import React from "react";
import { Grid } from "@material-ui/core";
import ChartSelector from "../../../ChartSelector";
import LineChart from "../../../LineChart";

const ChartsBlock = () => {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} sm={12} md={5}>
        <ChartSelector />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <LineChart />
      </Grid>
    </Grid>
  );
};

export default ChartsBlock;
