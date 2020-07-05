import React from "react";
import { Grid, CardContent, Typography, Card } from "@material-ui/core";
import CountUp from "react-countup";

const CardItem = ({ cardItem, lastUpdate }) => {
  const { name, count, backgroundColor, textColor } = cardItem;
  return (
    <Grid style={{ backgroundColor, margin: "0.5rem" }} item component={Card}>
      <CardContent>
        <Typography color="textSecondary" variant="h6" gutterBottom>
          {name ? name : ""}
        </Typography>
        <Typography style={{ color: textColor }} variant="h5" component="h2">
          <CountUp
            start={0}
            end={count ? count : 0}
            duration={2.75}
            separator=","
          />
        </Typography>
        <Typography color="textSecondary">
          Updated on {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
