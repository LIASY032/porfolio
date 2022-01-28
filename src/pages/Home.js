import React from "react";

import { Button } from "react-bootstrap";
import TwoColumnContainer from "../components/TwoColumnContainer";
import Title from "../components/Title";
import HomeBackground from "../components/HomeBackground";

function Home() {
  return (
    <>
      <HomeBackground></HomeBackground>
      <TwoColumnContainer>
        <TwoColumnContainer.Left>
          <Title> Hi,</Title>
          <br />
          <Title>I'm</Title>
          {/* <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span> */}
          <Title> Shiwei </Title>
          {/* <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span> */}
          <Title>Liang</Title>
          <br />
          <Button
            variant="warning"
            href="/contact"
            size="lg"
            className="z-index-1"
          >
            Contact me
          </Button>
        </TwoColumnContainer.Left>
        <TwoColumnContainer.Right>
          <img
            src="logo.png"
            alt="L logo"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
    </>
  );
}

export default Home;
