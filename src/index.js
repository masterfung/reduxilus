import './style/style.scss';

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyBs3VQE2nFE3d4G655bavpQMPdXweit7T0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.searchVideo('cute dogs');
  }

  searchVideo(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render () {
    // the function below delays the search function by 700ms
    const searchVideo = _.debounce((term) => {
      this.searchVideo(term)
    }, 700);

    return (
      <div className="row">
        <h1 className="text-center  ">Welcome to Reduxilus</h1>
        <SearchBar onSearchTermChange={searchVideo} />
        <VideoDetail video={this.state.selectedVideo }/>
        <VideoList
            onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
