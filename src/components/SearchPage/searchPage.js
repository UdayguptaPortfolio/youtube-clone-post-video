import React from "react";
import ".searchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./channelRow";
import VideoRow from ".videoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Netflix India"
        verified
        subs="16.8M"
        noOfVideos={2403}
        description="Netflix is the world's leading streaming entertainment service with 204 million paid memberships in over 190 countries enjoying ..."
      />
      <hr />
      <VideoRow
        views="126,346"
        subs="16.8M"
        description="Set over a thousand years ago in the early 11th century, VIKINGS: VALHALLA chronicles the heroic adventures of some..."
        timestamp="Feb 7, 2022"
        channel="Netflix India"
        title="Vikings: Valhalla | Official Trailer | Netflix India"
        image="https://i.ytimg.com/an_webp/jH3BM2fHhtM/mqdefault_6s.webp?du=3000&sqp=CL7JkpAG&rs=AOn4CLAOBGuw8yNtUHvQJ14StsONq21EKA"
      />

      <VideoRow
        views="126,346"
        subs="16.8M"
        description="Set over a thousand years ago in the early 11th century, VIKINGS: VALHALLA chronicles the heroic adventures of some..."
        timestamp="Feb 7, 2022"
        channel="Netflix India"
        title="Vikings: Valhalla | Official Trailer | Netflix India"
        image="https://i.ytimg.com/an_webp/jH3BM2fHhtM/mqdefault_6s.webp?du=3000&sqp=CL7JkpAG&rs=AOn4CLAOBGuw8yNtUHvQJ14StsONq21EKA"
      />

      <VideoRow
        views="126,346"
        subs="16.8M"
        description="Set over a thousand years ago in the early 11th century, VIKINGS: VALHALLA chronicles the heroic adventures of some..."
        timestamp="Feb 7, 2022"
        channel="Netflix India"
        title="Vikings: Valhalla | Official Trailer | Netflix India"
        image="https://i.ytimg.com/an_webp/jH3BM2fHhtM/mqdefault_6s.webp?du=3000&sqp=CL7JkpAG&rs=AOn4CLAOBGuw8yNtUHvQJ14StsONq21EKA"
      />

      <VideoRow
        views="126,346"
        subs="16.8M"
        description="Set over a thousand years ago in the early 11th century, VIKINGS: VALHALLA chronicles the heroic adventures of some..."
        timestamp="Feb 7, 2022"
        channel="Netflix India"
        title="Vikings: Valhalla | Official Trailer | Netflix India"
        image="https://i.ytimg.com/an_webp/jH3BM2fHhtM/mqdefault_6s.webp?du=3000&sqp=CL7JkpAG&rs=AOn4CLAOBGuw8yNtUHvQJ14StsONq21EKA"
      />

      <VideoRow
        views="126,346"
        subs="16.8M"
        description="Set over a thousand years ago in the early 11th century, VIKINGS: VALHALLA chronicles the heroic adventures of some..."
        timestamp="Feb 7, 2022"
        channel="Netflix India"
        title="Vikings: Valhalla | Official Trailer | Netflix India"
        image="https://i.ytimg.com/an_webp/jH3BM2fHhtM/mqdefault_6s.webp?du=3000&sqp=CL7JkpAG&rs=AOn4CLAOBGuw8yNtUHvQJ14StsONq21EKA"
      />
    </div>
  );
}

export default SearchPage;
