import React from "react";
import "./videoCard.css";
import Avatar from "@material-ui/core/Avatar";
import {Link} from 'react-router-dom';

function VideoCard({ image, title, channel, views, timestamp, channelImage,href }) {
  localStorage.setItem("href",href)
  return (
    <div className="videoCard">
      <Link to={`/video/:${title}`}><img className="videoCard__thumbnail" src={image} alt="" /></Link>
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
