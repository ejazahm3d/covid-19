import React from "react";
import { Bar } from "react-chartjs-2";

const PieBarChart = () => {
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
  return <div></div>;
};

export default PieBarChart;
