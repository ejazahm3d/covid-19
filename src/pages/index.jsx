import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core";
import Chart from "../components/Chart";
import CovidCard from "../components/Card";
import { useDispatch } from "react-redux";
import { fetchDataByCountryOrDefault, fetchDailyData } from "../store/actions";
import Countries from "../components/Countries";

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
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataByCountryOrDefault(country));
  }, [dispatch, country]);

  const styles = useStyles();
  return (
    <Layout>
      <div className={styles.root}>
        <section>
          <CovidCard className={styles.spacing} />
        </section>
        <section className={styles.spacing}>
          <Countries country={country} setCountry={setCountry} />
        </section>
        <section className={styles.spacing}>
          <Chart />
        </section>
      </div>
    </Layout>
  );
}

export default Home;
