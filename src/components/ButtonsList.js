import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const listOfButtons = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Cooking",
    "Dance",
  ];
  return (
    <div className="flex">
      {listOfButtons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
