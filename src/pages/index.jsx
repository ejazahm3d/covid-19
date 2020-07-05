import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Container, Grid } from "@material-ui/core";
import LineChart from "../components/LineChart";
import CovidSummary from "../components/CovidSummary";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";
import ChartSelector from "../components/ChartSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
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
          <Grid item className={styles.spacing}>
            <CountryPicker />
          </Grid>
          <Grid item sm={12}>
            <Grid container justify="center">
              <Grid sm={12} md={6} className={styles.spacing}>
                <CovidSummary />
              </Grid>
              <Grid className={styles.spacing} sm={12} md={6}>
                <ChartSelector />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <LineChart />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;
