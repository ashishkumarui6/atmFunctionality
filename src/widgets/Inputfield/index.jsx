import React from "react";
import "./index.css";

const Inputfield = (props) => {
  const { placeholder, type, onChange, v } = props;
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      className="screen"
      type={type}
      value={v}
      placeholder={placeholder}
    />
  );
};

export default Inputfield;
