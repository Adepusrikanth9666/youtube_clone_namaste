import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 text-black rounded-md">
        {name}
      </button>
    </div>
  );
};

export default Button;
