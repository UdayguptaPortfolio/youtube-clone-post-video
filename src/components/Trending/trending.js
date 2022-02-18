import React, { useState } from "react";
import VideoThumb from "../Main/VideoThumb";
import { useAppContext } from "../../context/appContext";
import VideoCard from "../Trending/videoCard";
import "./trending.css";

function Trending() {
  const { videos } = useAppContext();
  console.log("trending page");
  const [youtubeData, setYoutubeData] = useState("");

  const getyoutubedata = async () => {
    let api_key = "AIzaSyAxr-t7bAtEoYCuXX-gV-zzYL2Jqu1N5ss";
    let video_http = "https://www.googleapis.com/youtube/v3/videos?";
    fetch(
      video_http +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 50,
          regionCode: "US",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubeData(data);
      })
      .catch((err) => console.log(err));
  };
  // getyoutubedata();

  console.log(youtubeData);
  return (
    <div className="main">
      <h2>Trending Videos</h2>

      <div className="trendingVideos__videos">
    {
  youtubeData && youtubeData.items.map((e)=>(
    <VideoCard
    title={e.snippet.title}
    // views={}
    // timestamp={}
    // channelImage={}
    channel={e.snippet.channelTitle}
    image={e.snippet.thumbnails.high.url}
    // href={}
    />
  ))
}
</div>
      {videos.map((video) => (
        <VideoThumb video={video} />
      ))}
    </div>
  );
}

export default Trending;
