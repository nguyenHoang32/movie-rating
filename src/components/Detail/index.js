import React from "react";
import axios from "axios";
import { API_KEY } from "../../const/config";
import { Container, Grid, Divider, withStyles } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
const style = theme => ({
  root: {
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    backgroundColor: '#454c51',
    color: 'white',
    paddingTop: 30
  }
})
class Detail extends React.Component {
  state = {
    info: {},
  };
  componentDidMount = async () => {
    const { media_type, id } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
    );
    console.log(res);
    this.setState({
      info: res.data,
    });
  };
  render() {
    
    const { info } = this.state;
    const { classes } = this.props;
    console.log(info.genres)
    return (
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + info.poster_path}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={9}>
            <h1>
              {info.name || info.original_title}
              <span>({info.release_date})</span>
            </h1>
            <p>
              {info.genres && info.genres.map((genre, index) => {
                return <span key={index}>{genre.name}</span>
              })}
              ------- <span>{info.runtime}m</span> 
            </p>
            <p><FavoriteBorderOutlinedIcon style={{cursor: 'pointer'}} /></p>
            <h6>{info.tagline}</h6>
            <h3>Overview</h3>
            <p>{info.overview}</p>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(style)(Detail);
