import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
function Contact() {
  return (
    <div className="flex-container">
      <Fade bottom cascade={true}>
        <div className="text-container">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t </span>

          <span>m</span>
          <span>e</span>
        </div>
      </Fade>

      <div>
        <p>I am interested in frontend or backend opportunities</p>
        <p>
          If you want to contact me for jobs, please write the "job" in
          "Subject"
        </p>
      </div>
    </div>
  );
}

export default Contact;
