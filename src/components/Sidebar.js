import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //   Early return method of coading
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg  w-48 h-full ">
      <h1 className="font-bold">For You</h1>

      <ul>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Shorts
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>

      <ul>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Trending
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Sports
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Gaming
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Movies
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Shopping
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Flims
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Live
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          News
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Music
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Sports
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Gaming
        </li>
        <li className="m-1 p-2 font-serif cursor-pointer hover:bg-gray-100 rounded-md">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
