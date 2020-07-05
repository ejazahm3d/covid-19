import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import medicalImage from "./undraw_medical_research_qg4d.svg";

const HeroBlock = () => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Typography
          style={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
          variant="h2"
        >
          Covid Tracker
        </Typography>
      </motion.div>
      <motion.img
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          marginBottom: "3rem",
        }}
        src={medicalImage}
        alt="Medical"
      />
    </Grid>
  );
};

export default HeroBlock;
