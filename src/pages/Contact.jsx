import React from 'react';
import logo from "../elements/contact-logo.png";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (
    <section id="contact">
      <h1 className="font-sub text-5xl font-bold text-green p-10">Contact Me</h1>
      <p>github</p>
      <button className="bg-green text-yellow font-bold p-1.5 w-44 rounded-xl shadow-lg hover:bg-forest">Send</button>
      <img src={logo} alt="" title="contact-logo" id="face"></img>
      <a href="https://www.linkedin.com/in/emily-chang-485962234/" target="_blank" rel="noreferrer" title="Emily Chang" ><AiFillLinkedin className="fill-yellow hover:fill-sun"/></a>
      <a href="https://github.com/milychang19?ocid=AIDcmmli8vlwie_SEM__k_CjwKCAjw-O6zBhASEiwAOHeGxWZJoswgM1wM05bjiyrXGOtRXjaDnea15Is_IDrOCGaAYogtxg1hFBoCh1sQAvD_BwE_k_" target="_blank" rel="noreferrer" title="Emily Chang"><AiFillGithub className="fill-yellow hover:fill-sun"/></a>
      <a href="mailto:emily0109.ec@gmail.com" title="emily0109.ec@gmail.com" ><AiFillMail className="fill-yellow hover:fill-sun"/></a>

    </section>
  );
};

export default Contact;