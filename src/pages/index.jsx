import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";
import ChartsBlock from "../components/Blocks/Home/ChartsBlock";
import SummaryBlock from "../components/Blocks/Home/SummaryBlock";
import HeroBlock from "../components/Blocks/Home/HeroBlock";

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
          <HeroBlock />
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
