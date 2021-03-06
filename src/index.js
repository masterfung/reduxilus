import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import HeaderBar from './components/headerBar';
import Footer from './components/footer';

import './styles/style.scss';

const API_KEY = 'AIzaSyBs3VQE2nFE3d4G655bavpQMPdXweit7T0';

const searchableTopics = [
  'cute dogs', 'us politics', 'snl',
  'cute cats', 'marvel', 'dc', 'diy',
  'game of thrones', 'science', 'historical events'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    const selection = Math.floor(Math.random() * searchableTopics.length);

    this.searchVideo(selection);
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
      <div>
        <HeaderBar />
        <div className="container">
          <div className="row main-app">
              <h1 className="text-center ">Welcome to Reduxilus</h1>
              <SearchBar onSearchTermChange={searchVideo} />
              <VideoDetail video={this.state.selectedVideo }/>
              <VideoList
                  onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                  videos = {this.state.videos} />
          </div>
        </div>
      <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.bg-faded'));
