import React from "react";
import CardMedia from "../../Card/index";
import {
  Grid,
  Container,
} from "@material-ui/core";
class Discover extends React.Component {
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
    const { classes, data } = this.props;
    return(
      <Grid>
          <Container>
            <Grid className={classes.category}>
              <h2>Discover</h2>
            </Grid>
            <div style={{ display: "flex", overflowX: "scroll", padding: 16 }}>
              {this.showList(data)}
            </div>
          </Container>
        </Grid>
    )
    }
  }

export default Discover;
