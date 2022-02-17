import React from "react";
import ".videoRow.css";
import {Link} from 'react-router-dom';

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <Link to={`/video/:${title}`}><img className="videoCard__thumbnail" src={image} alt="" /></Link>
      <div className="videosRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •
          <span className="videosRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>
          {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
    
  );
}

export default VideoRow;
