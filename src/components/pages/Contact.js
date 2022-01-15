import React from "react";
import "./common.css";

import MyMap from "../MyMap";

import TwoColumnContainer from "../TwoColumnContainer";
import Title from "../Title";

import ContactForm from "../ContactForm";

function Contact() {
  return (
    <TwoColumnContainer>
      <TwoColumnContainer.Left>
        <Title>Contact</Title>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <Title>me</Title>

        <ContactForm />
      </TwoColumnContainer.Left>
      <TwoColumnContainer.Right>
        <MyMap></MyMap>
      </TwoColumnContainer.Right>
    </TwoColumnContainer>
  );
}

export default Contact;
