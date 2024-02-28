import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomName,
  generateRandomString,
  generateRandomUserAvatarURL,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const liveMessageData = useSelector((store) => store.chat.messages);
  useEffect(() => {
    // API polling
    const intervel = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20) + "🚀",
          userLogo: generateRandomUserAvatarURL(generateRandomName()),
        })
      );
    }, 1500);

    return () => {
      clearInterval(intervel);
    };
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        <div>
          {liveMessageData.map((messageData, index) => (
            <ChatMessage
              key={index}
              name={messageData.name}
              message={messageData.message}
              userLogo={messageData.userLogo}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Srikanth",
              message: liveMessage,
              userLogo: generateRandomUserAvatarURL(generateRandomName()),
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
          className="w-[330px] px-2 "
        />
        <button className="px-2 mx-2 bg-gray-400 rounded-s">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
