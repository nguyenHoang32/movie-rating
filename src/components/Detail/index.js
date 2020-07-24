import React from "react";
import axios from "axios";
import firebase from "../../const/configFirebase";
import { API_KEY } from "../../const/config";
import {
  Container,
  Grid,
  withStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import SimpleTabs from "../Modal/index";
const style = (theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#454c51f2",
    color: "white",
    paddingTop: 30,
  },
  modal: {
    position: "relative",
  },
  info: {
    marginTop: theme.spacing(3),
  },
  likeIcon: {
    color: 'red'
  }
});
class Detail extends React.Component {
  state = {
    info: {},
    open: false,
    likeIcon: false,
  };
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  componentDidMount = async () => {
    const { media_type, id } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
    );
    this.setState({
      info: res.data,
    });
  };
  onClickIcon = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert("Like");
        this.setState({
          likeIcon: true
        })
      } else {
        this.setState({
          open: true,
        });
      }
    });
  };
  render() {
    const { info, likeIcon } = this.state;
    const { classes } = this.props;
    let genres;
    let arrOfGenres = [];
    if (info.genres) {
      for (let i = 0; i < info.genres.length; i++) {
        arrOfGenres.push(info.genres[i].name);
      }
      genres = arrOfGenres.join();
    }
    return (
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + info.poster_path}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={9} className={classes.info}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              {info.name || info.original_title}
            </Typography>
            <div>
              <Typography variant="subtitle1" display="inline">
                {info.release_date}&#9642;
              </Typography>
              {info.genres && (
                <Typography display="inline">{genres}</Typography>
              )}
              &#9642;<span>{info.runtime}m</span>
            </div>
            <div>
              <FavoriteBorderOutlinedIcon
                onClick={this.onClickIcon}
                style={{ cursor: "pointer"}}
                className={likeIcon ? classes.likeIcon : ''}
              />
            </div>
            <i style={{ opacity: 0.8 }}>{info.tagline}</i>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Overview
            </Typography>
            <Typography variant="body1">{info.overview}</Typography>

            <Modal
              open={this.state.open}
              onClose={this.handleClose}
              className={classes.modal}
            >
              <SimpleTabs />
            </Modal>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(style)(Detail);
