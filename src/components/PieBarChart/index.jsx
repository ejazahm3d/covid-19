import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { Bar, Pie } from "react-chartjs-2";
import { lightBlue, lightGreen, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PieBarChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const classes = useStyles();

  const [selectedChart, setSelectedChart] = useState("bar");

  const handleChange = (event) => {
    setSelectedChart(event.target.value);
  };
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

  const pieChart = confirmed ? (
    <Pie
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

  return (
    <div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="demo-simple-select-label">
            Chart Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedChart}
            className={classes.selectEmpty}
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value="pie">Pie Chart</MenuItem>
            <MenuItem value="bar">Bar Chart</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ width: "90vw" }}>
        {selectedChart === "pie" ? pieChart : barChart}
      </div>
    </div>
  );
};

export default PieBarChart;
