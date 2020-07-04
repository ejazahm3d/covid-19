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
    marginTop: "3rem",
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
        <div className={styles.root}>
          <section>
            <Grid container>
              <Grid sm={12} md={6}>
                <CovidSummary className={styles.spacing} />
              </Grid>
              <Grid style={{ marginTop: "2rem" }} sm={12} md={6}>
                <ChartSelector />
              </Grid>
            </Grid>
          </section>
          <section className={styles.spacing}>
            <CountryPicker />
          </section>
          <section className={styles.spacing}>
            <LineChart />
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Home;
