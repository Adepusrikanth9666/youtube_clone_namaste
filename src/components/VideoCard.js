import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}Viwes</li>
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
