import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_VIDEOS_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import UserCard from "./UserCard";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make a api call on every key press
    // but  if the differenfce b/w the two keystrokes is <200ms then call the API.
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
    }, 200);
    searchOnClick();

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const searchOnClick = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_SEARCH_API);
    const json = await data.json();
    console.log("json", json);
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleUserInfo = () => {
    setIsUserClicked(!isUserClicked);
  };

  return (
    <>
      <div className="grid grid-flow-col shadow-lg p-5 m-2 justify-between items-center">
        <div className="flex col-span-1  items-center">
          <img
            onClick={toggleMenuHandler}
            className="h-8 mx-2 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAPFBMVEX///8AAADz8/NgYGCenp5ycnK+vr53d3djY2P7+/uBgYG0tLRERETLy8vExMShoaHb29tRUVEODg4iIiKNLvdjAAAArElEQVRoge3ZUQ6DIBBF0ZlaREUEZf97rTRdgjcm9Z0F3A8VQ2bMRB7iBfilxzgNl5vieKbnxSHLbIlquydbufhqXNvdDq59WODiwWqj2q2aZaje8vcUbeV9ubLd9r8RERGRW9USw+Viqb2dqEtROi9cTLrLtnPxnb1Co3H0saAvFP0U2UMkIiIizwOO/sihJTpuRQfF6BWaa7uzawV0IYKuctAlVAeuz0T+3gcd1BYFZSAIdAAAAABJRU5ErkJggg=="
            alt="hamberg_icon"
          />
          <a href="/">
            <img
              className="h-20"
              src="data:image/png;base64,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"
              alt="youtube_icon"
            />
          </a>
        </div>
        <div className="col-span-4  flex justify-center  ">
          <div className=" flex  justify-center  w-full">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="w-1/2 p-2 rounded-l-3xl border border-gray-500"
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="border border-gray-800 p-2 rounded-r-3xl ">
              <img
                className="h-6  hover:opacity-45"
                src="data:image/png;base64,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"
                alt="search_icon"
              />
            </button>
          </div>
          {showSuggestions && (
            <div className=" absolute mt-12 bg-white py-2 px-2 w-[420px]  border border-gray-100">
              <ul>
                {suggestions.map((search, index) => (
                  <li
                    key={index}
                    className=" py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                  >
                    🔍{search}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className="flex col-span-2 items-center justify-end cursor-pointer"
          onClick={handleUserInfo}
        >
          <img
            className="h-8"
            src="data:image/png;base64,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"
            alt="user_icon"
          />
        </div>
        {isUserClicked && (
          <div className="absolute flex end-3 align-bottom top-24 ">
            <UserCard />
          </div>
        )}
      </div>
    </>
  );
};

export default Head;
