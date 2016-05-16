import './style/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyBs3VQE2nFE3d4G655bavpQMPdXweit7T0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'dr. strange'}, (videos) => {
      this.setState({videos});
      console.log(this.state.videos);
    })
  }

  render () {
    return (
      <div>
        <h1>Welcome to Reduxilus</h1>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
