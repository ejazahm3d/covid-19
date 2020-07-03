import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Typography, Card } from "@material-ui/core";
import Chart from "../components/Chart";
import CovidCard from "../components/Card";
import { useDispatch } from "react-redux";
import {
  fetchDataByCountryOrDefault,
  fetchDailyData,
  fetchCountries,
} from "../store/actions";
import Countries from "../components/Countries";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    display: "flex",
  },
}));

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataByCountryOrDefault());
    dispatch(fetchCountries());
    dispatch(fetchDailyData());
  }, [dispatch]);

  const styles = useStyles();
  return (
    <Layout>
      <section className={styles.root}>
        <CovidCard />
        <Countries />
        <Chart />
      </section>
    </Layout>
  );
}

export default Home;
