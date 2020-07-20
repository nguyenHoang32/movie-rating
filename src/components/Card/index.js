import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  name: {
    height: 80,
    fontSize: 16,
    
  },
  date: {
    height: 30
  },
  card: {
    marginRight: 24,
    textAlign: 'center'
  },
  img: {
    width: 150,
    height: 225,
  },
});

export default function MediaCard({ name, poster_path, first_air_date }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia>
            <img
              className={classes.img}
              alt=""
              src={"https://image.tmdb.org/t/p/w500" + poster_path}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" className={classes.name}>{name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.date}>
              {first_air_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
