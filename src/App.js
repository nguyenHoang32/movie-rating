import React from "react";
import "./App.css";

import style from "./style";

import { NavLink, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { withStyles, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "redux";
import Footer from './components/footer'
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
  showNav = (navLink) => {
    return navLink.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={item.to}>{item.label}</NavLink>
        </li>
      );
    });
  };
  showRoute = (routes) => {
    return routes.map((item, index) => {
      return (
        <Route path={item.to} exact={item.exact} key={index}>
          {item.main}
        </Route>
      );
    });
  };
  handleClickItem = () => {};
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <nav className={classes.nav}>
          <Container>
            <ul>{this.showNav(navLink)}</ul>
          </Container>
        </nav>
        <Grid style={{ marginTop: 50 }}>
          <Switch>{this.showRoute(routes)}</Switch>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default compose(withStyles(style), connect(null, null))(App);
