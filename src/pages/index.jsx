import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Grid, Container } from "@material-ui/core";
import Chart from "../components/Chart";
import CovidSummary from "../components/CovidSummary";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spacing: {
    marginTop: "3rem",
  },
}));

function Home() {
  const { selectedCountry } = useSelector((state) => state.countries);
  const { data, loading } = useSelector((state) => state.covidData);
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
            <CovidSummary className={styles.spacing} />
          </section>
          <section className={styles.spacing}>
            <CountryPicker country={selectedCountry} />
          </section>
          <section className={styles.spacing}>
            <Chart data={data} loading={loading} country={selectedCountry} />
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Home;
