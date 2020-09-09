import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          <IconButton
            color="inherit"
            href="https://github.com/ejazahm3d"
            target="_blank"
            rel="noopener"
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
