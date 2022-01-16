import React from "react";
import "./style.css";
function Title({ children }) {
  return (
    <h2 className="z-index-1">
      {Array.from(children).map((c, i) => {
        return (
          <span className="animated-text" key={i}>
            {c}
          </span>
        );
      })}
    </h2>
  );
}

export default Title;
