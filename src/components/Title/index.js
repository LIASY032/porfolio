import React from "react";
import "./style.css";
function Title({ children }) {
  return (
    <h2>
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
