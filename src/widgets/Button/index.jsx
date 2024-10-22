import React from "react";
import "./index.css";
const Button = (props) => {
  return (
    <button
      onClick={props.onclickFn}
      disabled={props.disabled}
      className="Button"
      style={{ backgroundColor: props.bgColor }}
    >
      {props.name}
    </button>
  );
};

export default Button;
