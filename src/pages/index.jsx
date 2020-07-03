import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  fetchDataByCountry,
  fetchDailyData,
  fetchCountries,
} from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
}));

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataByCountry());
    dispatch(fetchCountries());
    dispatch(fetchDailyData());
  }, [dispatch]);

  const styles = useStyles();
  return (
    <Layout>
      <section className={styles.root}>
        <Typography variant="h1">Hello World</Typography>
      </section>
    </Layout>
  );
}

export default Home;
