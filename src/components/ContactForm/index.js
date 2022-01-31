import React from "react";
import "./style.scss";

function ContactForm() {
  return (
    <>
      <form id="contact" autoComplete="off">
        <ul>
          <li className="half ">
            <input placeholder="Name" type="text" name="name" />
          </li>
          <li className="half " style={{ marginLeft: "2%" }}>
            <input placeholder="Email" type="email" name="email" />
          </li>
          <li>
            <input placeholder="Subject" type="text" name="subject" />
          </li>
          <li>
            <textarea placeholder="Message" name="msg"></textarea>
          </li>
          <li className="submit ">
            <input type="hidden" name="ip" value="203.220.138.12" />
            <a id="submit-form" className="flat-button ">
              <div>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Send message!</span>
              </div>
            </a>
          </li>
        </ul>
      </form>
    </>
  );
}

export default ContactForm;
