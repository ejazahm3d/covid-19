import React, { useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries, updateCountry } from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Countries = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(updateCountry(event.target.value));
  };

  const { selectedCountry: country } = useSelector((state) => state.countries);
  const { data, error, loading } = useSelector((state) => state.countries);
  if (loading && !data && !error) return <div>Loading...</div>;

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
