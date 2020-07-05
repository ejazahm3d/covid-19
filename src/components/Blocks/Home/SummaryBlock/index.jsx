import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CovidSummary from "../../../CovidSummary";
import GlobalSummaryTable from "../../../GlobalSummaryTable";

const SummaryBlock = () => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: "2rem" }}>
      <Typography style={{ marginBottom: "3rem" }} variant="h4">
        Covid Summary
      </Typography>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={12} md={8}>
          <GlobalSummaryTable />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CovidSummary />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SummaryBlock;
