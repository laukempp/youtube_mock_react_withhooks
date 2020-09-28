import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="player-container">
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>{" "}
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
