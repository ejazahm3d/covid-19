import React from "react";
import { Bar } from "react-chartjs-2";
import { lightBlue, lightGreen, red } from "@material-ui/core/colors";

const PieBarChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [lightBlue[500], lightGreen[500], red[400]],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return <div style={{ width: "90vw" }}>{barChart}</div>;
};

export default PieBarChart;
