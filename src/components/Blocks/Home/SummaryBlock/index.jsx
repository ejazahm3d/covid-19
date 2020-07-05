import React from "react";
import { Grid } from "@material-ui/core";
import CovidSummary from "../../../CovidSummary";
import GlobalSummaryTable from "../../../GlobalSummaryTable";

const SummaryBlock = () => {
  return (
    <Grid container justify="center">
      <Grid item sm={12} md={6}>
        <CovidSummary />
      </Grid>
      <Grid item sm={12} md={6}>
        <GlobalSummaryTable />
      </Grid>
    </Grid>
  );
};

export default SummaryBlock;
