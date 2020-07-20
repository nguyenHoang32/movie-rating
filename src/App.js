import React from "react";
import "./App.css";
import axios from "axios";
import style from "./style";
import { API_KEY } from "./const/config";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import {
  Grid,
  Container,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import CategoryHome from "./components/Home/category/index";
import Discover from './components/Home/category/Discover'
const navLink = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/movie",
    label: "Movie",
  },
  {
    to: "/tv",
    label: "TV Shows",
  },
];

class App extends React.Component {
  state = {
    dataTrending: [],
    dataPopular: [],
    dataDiscover: []
  };
  showNav = (navLink) => {
    return navLink.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={item.to}>{item.label}</NavLink>
        </li>
      );
    });
  };
  handleChangeTimeWindow = async (time_window) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/${time_window}?api_key=${API_KEY}`
    );

    this.setState({
      dataTrending: res.data.results,
    });
  };
  handleChangeCategory = async (category) => {
    const res = await axios.get(`https://api.themoviedb.org/3/${category}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    this.setState({
      dataPopular : res.data.results
    })
  }
  async componentDidMount() {
    // dau tien goi "day"
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
      const res2 = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      const res3 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      const res4 = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      
      // Ket hop 2 arr thanh 1
      const arr3 = res3.data.results;
      const arr4 = res4.data.results;
      let length = arr3.length >= arr4.length ? arr3.length : arr4.length;
      let dataDiscover = []
      for(let i = 0; i < length; i++){
        dataDiscover.push(arr3[i], arr4[i])
      }

      this.setState({
        dataTrending: res.data.results,
        dataPopular: res2.data.results,
        dataDiscover
      });
    }
    catch{

    }
   
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <nav className={classes.nav}>
          <Container>
            <ul>{this.showNav(navLink)}</ul>
          </Container>
        </nav>
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
        <CategoryHome
          classes={classes}
          label="Trending"
          data={this.state.dataTrending}
          handleChangeTimeWindow={this.handleChangeTimeWindow}
        />
        <CategoryHome
          classes={classes}
          label="Popular"
          data={this.state.dataPopular}
          handleChangeCategory={this.handleChangeCategory}
        />
        <Discover data={this.state.dataDiscover} classes={classes}/>
        <footer
          style={{ backgroundColor: "#032541", height: 300, marginTop: 50 }}
        ></footer>
      </div>
    );
  }
}

export default withStyles(style)(App);
