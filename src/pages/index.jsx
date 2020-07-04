import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Container, Grid } from "@material-ui/core";
import LineChart from "../components/LineChart";
import CovidSummary from "../components/CovidSummary";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";
import PieBarChart from "../components/PieBarChart";

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
  const { data } = useSelector((state) => state.covidData);
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
            <CountryPicker />
          </section>
          <section className={styles.spacing}>
            <Grid>
              <Grid item sm={12}>
                <PieBarChart data={data} country />
              </Grid>
              <Grid style={{ magrinTop: "5rem" }} item sm={12}>
                <LineChart />
              </Grid>
            </Grid>
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Home;
