import React from 'react';
import logo from "../elements/contact-logo.png";

const Contact = () => {
  return (
    <section id="contact">
      <h1 id="contact-me">Contact Me</h1>
      <p>github</p>
      <button>Send</button>
      <img src={logo} alt="" title="contact-logo" id="face"></img>
    </section>
  );
};

export default Contact;