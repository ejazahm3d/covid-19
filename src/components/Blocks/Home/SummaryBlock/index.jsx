import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CovidSummary from "../../../CovidSummary";
import GlobalSummaryTable from "../../../GlobalSummaryTable";
import { motion } from "framer-motion";

const SummaryBlock = () => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: "2rem" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Typography style={{ marginBottom: "3rem" }} variant="h3">
          Covid Summary
        </Typography>
      </motion.div>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={12} md={8}>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <GlobalSummaryTable />
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <CovidSummary />
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SummaryBlock;
