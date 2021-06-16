import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.size === "large" ? "large" : "medium"} ${
        props.styles === "outline" ? "outline" : "primary"
      } ${props.className}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
