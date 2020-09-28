import axios from "axios";

const key = "AIzaSyDvKzWAdKi92uEkS_xsS2pzuUhHSmEdNTU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: key,
  },
});
