import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  return (
    <div className="m-4 p-2 border border-black w-60">
      <div>
        <label>Enter the value</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Demo;
