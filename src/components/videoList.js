import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map(function(video) {
    return <VideoListItem
            key = {video.etag}
            onVideoSelect = {props.onVideoSelect}
            video= {video} />
  });

  return (
    <ul className="col-md-12 list-group video-content">
      {videoItems}
    </ul>
  )
}

export default VideoList;
