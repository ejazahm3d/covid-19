import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ChartSelector from "../../../ChartSelector";
import LineChart from "../../../LineChart";
import { useSelector } from "react-redux";

const ChartsBlock = () => {
  const { selectedCountry: country } = useSelector((state) => state.countries);
  return (
    <Grid style={{ marginTop: "3rem" }} item xs={12} sm={12} md={12} lg={12}>
      <Typography style={{ marginBottom: "" }} variant="h3">
        {country ? "Country" : "World"} Stats
      </Typography>
      <Typography style={{ margin: "0.5rem" }} variant="subtitle1">
        {country
          ? `You are looking at ${country}'s stats. Select Global from above to see World stats.`
          : "You are looking at World Stats. Select a specific country from above to see it's stats"}
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
