import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg mb-2">
      <img
        className="rounded-[50%] px-4"
        alt="user_image"
        src="https://yt3.ggpht.com/ytc/AIdro_k-FUs3hTFKa5SIIKS9zlZqtrfI3Ot_695FjS4t=s48-c-k-c0x00ffffff-no-rj"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
