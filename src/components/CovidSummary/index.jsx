import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import { lightBlue, lightGreen, red } from "@material-ui/core/colors";

const CovidSummary = () => {
  const { data, loading, error } = useSelector((state) => state.covidData);
  if (loading && !data.confirmed && !error) return <div>Loading...</div>;

  const { confirmed, recovered, deaths, lastUpdate } = data;

  const cardsData = [
    {
      name: "Infected",
      count: confirmed?.value,
      description: "Number of active cases of COVID-19.",
      backgroundColor: lightBlue[100],
      textColor: lightBlue[500],
    },
    {
      name: "Recovered",
      count: recovered?.value,
      description: "Number of recoveries from COVID-19.",
      backgroundColor: lightGreen[100],
      textColor: lightGreen[500],
    },
    {
      name: "Deaths",
      count: deaths?.value,
      description: "Number of deaths caused by COVID-19.",
      backgroundColor: red[100],
      textColor: red[500],
    },
  ];

  return (
    <>
      <Grid container justify="center" alignItems="center">
        {cardsData.map((item) => (
          <CardItem key={item.name} cardItem={item} lastUpdate={lastUpdate} />
        ))}
      </Grid>
    </>
  );
};

export default CovidSummary;
