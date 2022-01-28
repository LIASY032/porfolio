import React from "react";

import MyMap from "../components/MyMap";

import TwoColumnContainer from "../components/TwoColumnContainer";
import Title from "../components/Title";

import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <TwoColumnContainer>
      <TwoColumnContainer.Left>
        <Title>Contact</Title>
        {/* <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span>
        <span style={{ display: "inline-flex" }}>&nbsp;</span> */}
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
