import React from "react";
import {
  generateRandomName,
  generateRandomUserAvatarURL,
} from "../utils/helper";

const ChatMessage = ({ name, message, userLogo }) => {
  return (
    <div className="flex items-center shadow-sm my-4">
      <img src={userLogo} alt="user" className="rounded-[50%] h-10 w-10" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
