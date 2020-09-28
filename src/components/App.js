import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";
import "./App.css";

class App extends React.Component {
  state = {
    videoList: [],
    selectedVideo: null,
  };

  onSearchSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videoList: res.data.items, selectedVideo: null });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    if (this.state.selectedVideo) {
      return (
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          <div className="video-container">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              videos={this.state.videoList}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          <div className="video-container">
            <VideoList
              videos={this.state.videoList}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
