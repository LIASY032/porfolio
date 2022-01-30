import React from "react";
import "./style.scss";

function ContactForm() {
  return (
    <>
      <form id="contact" autoComplete="off">
        <ul>
          <li className="half animated fadeInUp">
            <input
              className="input__field input__field--hoshi"
              placeholder="Name"
              type="text"
              name="name"
            />
            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
          </li>
          <li className="half animated fadeInUp" style={{ marginLeft: "2%" }}>
            <input
              className="input__field input__field--hoshi"
              placeholder="Email"
              type="email"
              name="email"
            />
            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
          </li>
          <li className="animated fadeInUp">
            <input
              className="input__field input__field--hoshi"
              placeholder="Subject"
              type="text"
              name="subject"
            />
            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
          </li>
          <li className="animated fadeInUp">
            <textarea
              className="input__field input__field--hoshi"
              placeholder="Message"
              name="msg"
            ></textarea>
            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
          </li>
          <li className="submit animated fadeInUp">
            <input type="hidden" name="ip" value="203.220.138.12" />
            <a href="" id="submit-form" className="flat-button submit-form">
              <div>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Send message!</span>
              </div>
            </a>
            <input
              style={{ display: "none" }}
              id="submit"
              type="submit"
              className="flat-button"
              value="SEND"
            />
          </li>
        </ul>
      </form>
    </>
  );
}

export default ContactForm;
