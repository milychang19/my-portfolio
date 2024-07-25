import React from 'react';
import logo from "../elements/contact-logo.png";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (
    <section id="contact" className="rounded-[50px] bg-matcha pb-20">
      <div className="flex mx-32 ">
        <div className="align-center w-[60%]">
          <h1 className="font-sub text-5xl font-xbold text-green p-10 pt-14 animate-fade-in-zoom1">Contact Me</h1> 
          <form action="https://getform.io/f/anlexena" method="POST" className="grid"> 
            <input type="text" name="name" className="h-16 rounded-[20px] indent-5 m-3 text-xl shadow-sm animate-fade-in-zoom2" placeholder="Your Name"></input>
            <input type="email" name="email" className="h-16 rounded-[20px] indent-5 m-3 text-xl shadow-sm animate-fade-in-zoom2" placeholder="Email"></input>
            <textarea name="messages" className="h-32 rounded-[20px] m-3 p-5 text-xl shadow-sm animate-fade-in-zoom2" placeholder="Messages"></textarea>
            <button type="submit" className="bg-green text-yellow font-bold p-1.5 w-44 rounded-xl shadow-lg transition-colors hover:bg-forest place-self-center m-3 animate-fade-in-zoom3">Send</button>
          </form>
        </div>
        <div className="w-[40%] mt-16 animate-fade-in-zoom3">
          <img src={logo} alt="" title="© 2024 Emily Chang. All rights reserved."></img>
          <div className="flex gap-3 place-content-center m-4 animate-fade-in-zoom4">
            <a href="https://www.linkedin.com/in/emily-chang-485962234/" target="_blank" rel="noreferrer" title="LinkedIn"><AiFillLinkedin className="w-16 h-16 fill-yellow transition-colors duration-300 drop-shadow-sm hover:fill-sun"/></a>
            <a href="https://github.com/milychang19?ocid=AIDcmmli8vlwie_SEM__k_CjwKCAjw-O6zBhASEiwAOHeGxWZJoswgM1wM05bjiyrXGOtRXjaDnea15Is_IDrOCGaAYogtxg1hFBoCh1sQAvD_BwE_k_" target="_blank" rel="noreferrer" title="GitHub"><AiFillGithub className="w-16 h-16 fill-yellow transition-colors duration-300 drop-shadow-sm hover:fill-sun"/></a>
            <a href="mailto:emily0109.ec@gmail.com" title="emily0109.ec@gmail.com" ><AiFillMail className="w-16 h-16 fill-yellow transition-colors duration-300 drop-shadow-sm hover:fill-sun"/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;