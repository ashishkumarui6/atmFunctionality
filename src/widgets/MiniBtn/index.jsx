import React from "react";
import "./index.css";
const MiniBtn = ({ name, bgBtn, MiniBtnFn }) => {
  return (
    <>
      <button
        onClick={MiniBtnFn}
        className="miniBtn"
        style={{ backgroundColor: bgBtn }}
      >
        {name}
      </button>
    </>
  );
};

export default MiniBtn;
