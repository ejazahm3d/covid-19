import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { lightBlue, red } from "@material-ui/core/colors";

const LineChart = () => {
  const dispatch = useDispatch();
  const { data: dailyData } = useSelector((state) => state.dailyData);
  const { selectedCountry: country } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchDailyData(country));
  }, [dispatch, country]);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => new Date(date).toDateString()),
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

  return <div style={{ width: "100%" }}>{lineChart}</div>;
};

export default LineChart;
