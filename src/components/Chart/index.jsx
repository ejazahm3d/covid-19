import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const dispatch = useDispatch();
  const { data: dailyData } = useSelector((state) => state.dailyData);
  // const [dailyData, setDailyData] = useState({});

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
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
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
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div style={{ width: "80vw" }}>{country ? barChart : lineChart}</div>;
};

export default Chart;
