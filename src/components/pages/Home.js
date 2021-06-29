import React from "react";
import { Circle, Square, Triangle } from "react-bootstrap-icons";
import "./home.css";
import "./common.css";

function Home() {
  return (
    <>
      <div className="common-container">
        <Triangle className="triangle position-absolute pattern-size " />

        <Square className="square position-absolute pattern-size " />

        <Circle className="circle position-absolute pattern-size " />
        <div className="content">
          <div>
            <div className="text-container">
              <span>H</span>
              <span>i, </span>
            </div>
            <div className="text-container">
              <span>I </span>
              <span>a</span>
              <span>m </span>

              <span>S</span>
              <span>h</span>
              <span>i</span>
              <span>w</span>
              <span>e</span>
              <span>i </span>
              <span>L</span>
              <span>i</span>
              <span>a</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>

          <div>
            <img src="logo.png" alt="L logo"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
