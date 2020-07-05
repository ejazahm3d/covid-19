import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGlobalSummaryData } from "../../store/actions";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { lightGreen, red, yellow } from "@material-ui/core/colors";
import sortBy from "lodash.sortby";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {},
});

const columns = [
  { id: "name", label: "Name", minWidth: 170, fontWeight: "bold" },
  {
    id: "confirmed",
    label: "Total\u00a0Confirmed",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "newConfirmed",
    label: "New\u00a0Confirmed",
    minWidth: 170,
    backgroundColor: yellow[100],
    textColor: "black",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "recovered",
    label: "Total\u00a0Recovered",
    minWidth: 170,

    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "newRecovered",
    label: "New\u00a0Recovered",
    minWidth: 170,
    backgroundColor: lightGreen[100],
    textColor: lightGreen[500],
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "deaths",
    label: "Total\u00a0Deaths",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "newDeaths",
    label: "New\u00a0Deaths",
    backgroundColor: red[100],
    textColor: red[500],
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const GlobalSummaryTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGlobalSummaryData());
  }, [dispatch]);

  const { data, loading } = useSelector((state) => state.globalSummary);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading && data?.Countries?.[0]) return <div>Loading...</div>;
  const countries = data?.Countries;
  const sortedCountries = sortBy(countries, "TotalConfirmed").reverse();
  const rows = sortedCountries?.map((country) => ({
    name: country.Country,
    code: country.CountryCode,
    confirmed: country.TotalConfirmed,
    newConfirmed: country.NewConfirmed,
    deaths: country.TotalDeaths,
    newDeaths: country.NewDeaths,
    recovered: country.TotalRecovered,
    newRecovered: country.NewRecovered,
  }));

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  style={{
                    backgroundColor: column.backgroundColor,
                    color: column.textColor,
                  }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          style={{
                            backgroundColor: column.backgroundColor,
                            color: column.textColor,
                            fontWeight: column.fontWeight,
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default GlobalSummaryTable;
