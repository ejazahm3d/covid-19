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
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ChartSelector = () => {
  const { selectedCountry: country } = useSelector((state) => state.countries);

  const {
    data: { confirmed, recovered, deaths },
  } = useSelector((state) => state.covidData);

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
      <div style={{ width: "100%", margin: "1rem 1rem" }}>
        {selectedChart === "pie" ? pieChart : barChart}
      </div>
    </div>
  );
};

export default ChartSelector;
