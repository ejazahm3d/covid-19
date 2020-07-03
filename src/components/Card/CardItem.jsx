import React from "react";
import { Grid, CardContent, Typography, Card } from "@material-ui/core";
import CountUp from "react-countup";

const CardItem = ({ name, count, description, lastUpdate }) => {
  return (
    <Grid item xs={12} md={3} component={Card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp
            start={0}
            end={count ? count : 1}
            duration={2.75}
            separator=","
          />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
