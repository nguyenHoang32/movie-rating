import React from "react";
import "./App.css";
import style from "./style";

import { NavLink, Switch, Route } from "react-router-dom";
import routes from "./routes";
import {
  withStyles,
  Grid,
  Button,
  Avatar,
  Popover,
  Typography,
  Modal,
} from "@material-ui/core";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";
import Footer from "./components/footer";
import SimpleTabs from "./components/Modal";
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
    user: undefined,
    anchorEl: null,
    openModal: false
  };
  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
       () => {
          // Sign-out successful.
          this.setState({
            user: undefined,
          });
        },
        () => {
          // An error happened.
        }
      );
  };
  handleOpenModal = () => {
    this.setState({
      openModal: true
    })
  }
  handleCloseModal = () => {
    this.setState({
      openModal: false
    })
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      } else {
      }
    });
  }
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
  render() {
    const { user, openModal } = this.state;
    const open = Boolean(this.state.anchorEl);
    const { classes } = this.props;
    return (
      <div className="App">
        <nav className={classes.nav}>
          <Container className={classes.container}>
            <ul>{this.showNav(navLink)}</ul>
            {user ? (
              <Avatar
                style={{ cursor: "pointer" }}
                src="../public/image.jpg"
                onClick={this.handleClick}
              />
            ) : (
              <React.Fragment>
                <Button onClick={this.handleOpenModal}>Sign In</Button>
                <Modal open={openModal} onClose={this.handleCloseModal}>
                  <SimpleTabs />
                </Modal>
              </React.Fragment>
            )}
            <Popover
              open={open}
              anchorEl={this.state.anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography}>
                <ul>
                  <li>
                    <Button onClick={this.signOut}>Sign Out</Button>
                  </li>
                </ul>
              </Typography>
            </Popover>
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
