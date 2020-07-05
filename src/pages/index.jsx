import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";
import ChartsBlock from "../components/Blocks/Home/ChartsBlock";
import SummaryBlock from "../components/Blocks/Home/SummaryBlock";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
  },
  spacing: {
    marginBottom: "3rem",
  },
}));

function Home() {
  const { selectedCountry } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataByCountryOrDefault(selectedCountry));
  }, [dispatch, selectedCountry]);

  const styles = useStyles();
  return (
    <Layout>
      <Container>
        <Grid container className={styles.root} justify="center">
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
              src="/undraw_medical_research_qg4d.svg"
              alt="Medical"
            />
          </Grid>
          <SummaryBlock />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CountryPicker />
          </Grid>
          <ChartsBlock />
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;
