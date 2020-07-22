import React from "react";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid, 
  Container
} from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import style from './style';

import CardMedia from '../Card/index'
class ConfigCategory extends React.Component {
  state = {
    value: this.props.option[0].value
  };
  showList = (data) => {
    return data.map((item, index) => {
      return (
        <CardMedia
          key={index}
          name={item.name || item.title}
          poster_path={item.poster_path}
          first_air_date={item.first_air_date || item.release_date}
          id={item.id}
          media_type={item.media_type || this.state.value}
          history={this.props.history}
        />
      );
    });
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
    this.props.handleChange({
      // trending or popular
      type: this.props.label,
      value: e.target.value
    })
  }
  render() {
    // option = [{value: 'day', label: 'Today'}, {value: 'week', label: 'This week'}]
    // option = [{value: 'tv', label: 'On TV'}, {value: 'movie', label: 'Movie'}]
    // type: trending or popular
    const {option, classes, label, data} = this.props;
    return (
      <Grid>
        <Container>
          <Grid className={classes.category}>
            <h2>{label}</h2>
            <RadioGroup
        value={this.state.value}
        onChange={this.onChange}
      >
        <FormControlLabel value={option[0].value} control={<Radio />} label={option[0].label} />
        <FormControlLabel value={option[1].value} control={<Radio />} label={option[1].label} />
      </RadioGroup>
          </Grid>
          <div style={{ display: "flex", overflowX: "scroll", padding: 16 }}>
            {this.showList(data)}
          </div>
        </Container>
      </Grid>
      
    );
  }
}
export default withStyles(style)(ConfigCategory);
