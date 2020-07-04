import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { lightBlue, lightGreen, red } from "@material-ui/core/colors";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const dispatch = useDispatch();
  const { data: dailyData } = useSelector((state) => state.dailyData);

  useEffect(() => {
    dispatch(fetchDailyData());
  }, [dispatch]);

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

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: lightBlue[500],
            fill: false,
            backgroundColor: lightBlue[50],
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: red[400],
            fill: false,
            backgroundColor: red[50],
          },
        ],
      }}
    />
  ) : null;

  return <div style={{ width: "90vw" }}>{country ? barChart : lineChart}</div>;
};

export default Chart;
