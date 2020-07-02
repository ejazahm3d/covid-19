import React from "react";
import Layout from "../components/Layout";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <Layout>
      <Button variant="outlined" color="primary">
        Hello World
      </Button>
    </Layout>
  );
}

export default Home;
