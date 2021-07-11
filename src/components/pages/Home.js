import React from "react";
import { Circle, Square, Triangle } from "react-bootstrap-icons";
import "./home.css";
import "./common.css";
import { Fade } from "react-reveal";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";

function Home() {
  return (
    <>
      <div className="common-container">
        <Triangle className="triangle position-absolute pattern-size " />

        <Square className="square position-absolute pattern-size " />

        <Circle className="circle position-absolute pattern-size " />
        <div className="content">
          <div>
            <Fade bottom cascade={true}>
              <div className="container">
                <AnimateText initialDelay={0.5} wordDelay={0.5}>
                  Hi,
                </AnimateText>
                <AnimateText initialDelay={0.5} wordDelay={0.5}>
                  I am Shiwei Liang
                </AnimateText>
              </div>
            </Fade>
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
