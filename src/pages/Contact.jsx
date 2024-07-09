import React from 'react';
import logo from "../elements/contact-logo.png";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (
    <section id="contact">
      <h1 id="contact-me">Contact Me</h1>
      <p>github</p>
      <button>Send</button>
      <img src={logo} alt="" title="contact-logo" id="face"></img>
      <a href="https://www.linkedin.com/in/emily-chang-485962234/" target="_blank" rel="noreferrer" title="Emily Chang" className="icon"><AiFillLinkedin /></a>
      <a href="https://github.com/milychang19?ocid=AIDcmmli8vlwie_SEM__k_CjwKCAjw-O6zBhASEiwAOHeGxWZJoswgM1wM05bjiyrXGOtRXjaDnea15Is_IDrOCGaAYogtxg1hFBoCh1sQAvD_BwE_k_" target="_blank" rel="noreferrer" title="Emily Chang" className="icon"><AiFillGithub /></a>
      <a href="mailto:emily0109.ec@gmail.com" title="emily0109.ec@gmail.com" className="icon"><AiFillMail /></a>

    </section>
  );
};

export default Contact;