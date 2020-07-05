import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";
import ChartsBlock from "../components/Blocks/Home/ChartsBlock";
import SummaryBlock from "../components/Blocks/Home/SummaryBlock";

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

          <SummaryBlock />
          <ChartsBlock />
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;
