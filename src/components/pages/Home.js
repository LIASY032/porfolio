import React from "react";
import { Circle, Square, Triangle } from "react-bootstrap-icons";
import "./home.css";

function Home() {
  return (
    <>
      <div className="spinner">
        <Triangle className="triangle position-absolute pattern-size " />

        <Square className="square position-absolute pattern-size " />

        <Circle className="circle position-absolute pattern-size " />
        <div className="content">
          <div>
            <label>Shiwei Liang</label>
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
