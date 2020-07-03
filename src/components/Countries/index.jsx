import React, { useState, useEffect } from "react";
import {
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Countries = ({ country, setCountry }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const { data, error, loading } = useSelector((state) => state.countries);
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-label">
          Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          className={classes.selectEmpty}
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem value="">Global</MenuItem>
          {data.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Countries;
