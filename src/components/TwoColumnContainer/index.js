import React from "react";
import "./style.css";
function RightColumn({ children }) {
  return <div className="right-item item">{children}</div>;
}

function LeftColumn({ children }) {
  return <div className="left-item item">{children}</div>;
}
function TwoColumnContainer({ children }) {
  return <div className="common-page flex-container">{children}</div>;
}

TwoColumnContainer.Left = LeftColumn;
TwoColumnContainer.Right = RightColumn;

export default TwoColumnContainer;
