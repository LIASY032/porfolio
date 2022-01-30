import React from "react";
import "./style.css";
function RightColumn({ children, className }) {
  return <div className={`right-item item ${className}`}>{children}</div>;
}

function LeftColumn({ children, className }) {
  return <div className={`left-item item ${className}`}>{children}</div>;
}
function TwoColumnContainer({ children }) {
  return <div className="common-page flex-container">{children}</div>;
}

TwoColumnContainer.Left = LeftColumn;
TwoColumnContainer.Right = RightColumn;

export default TwoColumnContainer;
