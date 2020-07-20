import React from "react";
import CardMedia from "../../Card/index";
import {
  Grid,
  Container,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
class CategoryHome extends React.Component {
  state = {
    time_window: "day",
    category: "tv",
  };
  changeTimeWindow = (e) => {
    this.setState({
      time_window: e.target.value,
    });
    this.props.handleChangeTimeWindow(e.target.value);
  };
  changeCategory = (e) => {
    this.setState({
      category: e.target.value
    })
    this.props.handleChangeCategory(e.target.value)
  }
  showList = (data) => {
    return data.map((item, index) => {
      return (
        <CardMedia
          key={index}
          name={item.name || item.title}
          poster_path={item.poster_path}
          first_air_date={item.first_air_date || item.release_date}
        />
      );
    });
  };
  render() {
    const { data, classes, label } = this.props;
    if (label === "Trending") {
      return (
        <Grid>
          <Container>
            <Grid className={classes.category}>
              <h2>{label}</h2>
              <RadioGroup
                value={this.state.time_window}
                onChange={this.changeTimeWindow}
              >
                <FormControlLabel
                  value="day"
                  control={<Radio />}
                  label="Today"
                />
                <FormControlLabel
                  value="week"
                  control={<Radio />}
                  label="This Week"
                />
              </RadioGroup>
            </Grid>
            <div style={{ display: "flex", overflowX: "scroll", padding: 16 }}>
              {this.showList(data)}
            </div>
          </Container>
        </Grid>
      );
    }
    if (label === "Popular") {
      return (
        <Grid>
          <Container>
            <Grid className={classes.category}>
              <h2>{label}</h2>
              <RadioGroup value={this.state.category} onChange={this.changeCategory}>
                <FormControlLabel
                  value="tv"
                  control={<Radio />}
                  label="On TV"
                />
                <FormControlLabel
                  value="movie"
                  control={<Radio />}
                  label="Movie"
                />
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
}
export default CategoryHome;
