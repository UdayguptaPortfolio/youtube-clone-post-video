import React from "react";
import VideoThumb from "./VideoThumb";
import "./styles.css";
import { useAppContext } from "../../context/appContext";

const Main = () => {
  const { videos } = useAppContext();
  return (
    <div className="main">
      <h2>Your Videos</h2>
      <div className="mainVideos__videos">
      {videos.map((video) => (
        <VideoThumb video={video} />
      ))}
      </div>
    </div>
  );
};

export default Main;
