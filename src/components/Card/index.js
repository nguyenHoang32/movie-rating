import React from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { actClickItem } from '../../action/index';
import { connect } from 'react-redux';
import { compose } from 'redux';
const style = {
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
}

class MediaCard extends React.Component{
  onClick = () => {
    let itemClick = {
      id: this.props.id,
      media_type: this.props.media_type
    }
    this.props.history.push(`/${this.props.media_type}/${this.props.id}`)
    this.props.actClickItem(itemClick)
  }
  render(){
    const { classes } = this.props;
    const { name, poster_path, first_air_date, id, media_type } = this.props;
    return (
      <div className={classes.root} onClick={this.onClick}>
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
}
const mapDispatchToProps = (dispatch) => {
  return {
    actClickItem: (itemClick) => {dispatch(actClickItem(itemClick))} 
  }
}
export default compose(withStyles(style), connect(null, mapDispatchToProps))(MediaCard);
