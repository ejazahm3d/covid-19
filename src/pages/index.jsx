import React from "react";
import Layout from "../components/Layout";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
}));

function Home() {
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
