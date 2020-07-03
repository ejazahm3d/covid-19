import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const CovidSummary = () => {
  const { data, loading, error } = useSelector((state) => state.covidData);
  if (loading && !data.confirmed && !error) return <div>Loading...</div>;

  const { confirmed, recovered, deaths, lastUpdate } = data;

  const cardsData = [
    {
      name: "Infected",
      count: confirmed?.value,
      description: "Number of active cases of COVID-19.",
    },
    {
      name: "Recovered",
      count: recovered?.value,
      description: "Number of recoveries from COVID-19.",
    },
    {
      name: "Deaths",
      count: deaths?.value,
      description: "Number of deaths caused by COVID-19.",
    },
  ];

  return (
    <>
      <Grid container spacing={3} justify="space-evenly">
        {cardsData.map((item) => (
          <CardItem
            key={item.name}
            count={item.count}
            description={item.description}
            lastUpdate={lastUpdate}
          />
        ))}
      </Grid>
    </>
  );
};

export default CovidSummary;
