import React from 'react';
import VideoDetail from './videoDetail';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            <h5>{video.snippet.title}</h5>
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
