import React from "react";
import "./common.css";

import ContactInput from "../ContactInput";
import MyMap from "../MyMap";

import TwoColumnContainer from "../TwoColumnContainer";
import Title from "../Title";

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
        <p>I am interested in frontend or backend opportunities</p>

        <p>
          If you want to contact me for jobs, please write the "job" in
          "Subject"
        </p>
        <ContactInput></ContactInput>
      </TwoColumnContainer.Left>
      <TwoColumnContainer.Right>
        <MyMap></MyMap>
      </TwoColumnContainer.Right>
    </TwoColumnContainer>
    // <div className="common-container ">
    //   <Container>
    //     <Row>
    //       <Col>
    //         <Fade bottom cascade={true}>
    //           <div className="container">
    //             <AnimateText initialDelay={0.5} wordDelay={0.5}>
    //               Contact me
    //             </AnimateText>
    //           </div>
    //         </Fade>

    //         <p>I am interested in frontend or backend opportunities</p>
    //         <p>
    //           If you want to contact me for jobs, please write the "job" in
    //           "Subject"
    //         </p>

    //         <ContactInput></ContactInput>
    //       </Col>
    //       <Col>
    //         <MyMap></MyMap>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default Contact;
