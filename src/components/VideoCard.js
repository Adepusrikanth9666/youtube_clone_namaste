import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`p-2 m-2 ${
        isMenuOpen ? `w-[280px]` : `w-[260px]`
      } w-[260px] shadow-lg h-[320px] rounded-lg`}
    >
      <img className="rounded-lg" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} Viwes</li>
        <li></li>
      </ul>
    </div>
  );
};

export const RedMorderedCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      {info && <VideoCard info={info} />}
    </div>
  );
};

export default VideoCard;
