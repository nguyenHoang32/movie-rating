import React from "react";

import { withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 400,
    height: 550,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  appbar: {
    width: "100%",
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (e, newValue) => {
    this.setState({
      value: newValue,
    });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.appbar}>
          <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          <SignIn handleChange={this.handleChange} value={value} index={0}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp handleChange={this.handleChange} value={value} index={0}/>
        </TabPanel>
      </div>
    );
  }
}
export default withStyles(useStyles)(SimpleTabs);
