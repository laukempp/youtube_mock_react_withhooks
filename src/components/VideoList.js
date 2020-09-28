import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log("VIDEOLISTA RENDERÖITYI");
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div className="video-list ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
