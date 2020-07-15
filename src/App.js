import React from 'react';
import './App.css';
import axios from 'axios';
import * as config from './config';
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const API_ENDPOINT = `https://api.themoviedb.org/4/list?api_key=${config.API_KEY}`
class App extends React.Component {
  state = {
    data: []
  }
  async componentDidMount() {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${config.API_KEY}`);
    const data = res.data.results;
    this.setState({
      data
    });
    
  }
  render() {
    const { data } = this.state;
    console.log(data);
    const result = data.map((item, index) => (
      <div key={index}>
        <img src={'https://image.tmdb.org/t/p/w400/' + item.poster_path} />
        <p>{item.title}</p>
      </div>
    ))
    return (
      <div className="App">
        <div style={{}}>
          {result}
        </div>
        
      </div>
    );
  }
}

export default App;
