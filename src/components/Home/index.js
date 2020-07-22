import React from "react";
import { API_KEY } from "../../const/config";
import SearchIcon from "@material-ui/icons/Search";
import ConfigCategory from "../CategoryHome/ConfigCategory";
import {
  Grid,
  Paper,
  InputBase,
  IconButton,
  Container,
  withStyles,
} from "@material-ui/core";
import style from "./style";
import axios from "axios";
class Home extends React.Component {
  state = {
    dataTrending: [],
    dataPopular: {
      data: [],
      // tv or movie
      media_type: "tv",
    },
    dataDiscover: {
      data: [],
      media_type: "tv",
    },
  };
  handleChange = async (info) => {
    // trending : day or week
    // popular: tv or movie
    const { value } = info;
    switch (info.type) {
      case "Trending": {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/all/${value}?api_key=${API_KEY}`
        );

        this.setState({
          dataTrending: res.data.results,
        });
      }
      case "Popular": {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${value}/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        let dataPopular = {
          data: res.data.results,
        };
        this.setState({
          dataPopular,
        });
      }
      case "Discover": {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/${value}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        let dataDiscover = {
          data: res.data.results,
        };
        this.setState({
          dataDiscover,
        });
      }
    }
  };
  async componentDidMount() {
    // dau tien goi "day"
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
      );
      const res2 = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const res3 = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      let dataPopular = {
        data: res2.data.results,
        type: "tv",
      };
      let dataDiscover = {
        data: res3.data.results,
        type: "tv",
      };
      this.setState({
        dataTrending: res.data.results,
        dataPopular,
        dataDiscover,
      });
    } catch {}
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid className={classes.sectionSearch}>
          <Container>
            <h1>Welcome.</h1>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
            <Paper component="form" className={classes.paper}>
              <InputBase
                className={classes.input}
                placeholder="Search"
                style={{ flex: 1 }}
              />
              <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Container>
        </Grid>
        <ConfigCategory
          label="Trending"
          data={this.state.dataTrending}
          option={[
            { value: "day", label: "Today" },
            { value: "week", label: "This week" },
          ]}
          handleChange={this.handleChange}
          history={this.props.history}
        />
        <ConfigCategory
          label="Popular"
          data={this.state.dataPopular.data}
          media_type={this.state.dataPopular.media_type}
          option={[
            { value: "tv", label: "On TV" },
            { value: "movie", label: "Movie" },
          ]}
          handleChange={this.handleChange}
          history={this.props.history}
        />
        <ConfigCategory
          label="Discover"
          data={this.state.dataDiscover.data}
          media_type={this.state.dataDiscover.media_type}
          option={[
            { value: "tv", label: "TV" },
            { value: "movie", label: "Movie" },
          ]}
          handleChange={this.handleChange}
          history={this.props.history}
        />
        
      </React.Fragment>
    );
  }
}
export default withStyles(style)(Home);
