import React from 'react';
import logo from "../elements/contact-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="rounded-[50px] bg-matcha pb-10 md:pb-20">
      <div className="md:flex mx-12 md:mx-32 ">
        <div className="align-center md:w-[60%]">
          <h1 className="font-sub text-4xl md:text-5xl font-xbold text-green pt-10 pb-4 md:p-10 md:pt-14 animate-fade-in-zoom1">contact me</h1> 
          <form action="https://getform.io/f/anlexena" method="POST" className="grid"> 
            <input type="text" name="name" className="h-10 md:h-16 rounded-[14px] md:rounded-[20px] indent-2 md:indent-5 mx-5 my-2 md:my-3 text-sm md:text-xl shadow-sm animate-fade-in-zoom2" placeholder="name"></input>
            <input type="email" name="email" className="h-10 md:h-16 rounded-[14px] md:rounded-[20px] indent-2 md:indent-5 mx-5 my-2 md:my-3 text-sm md:text-xl shadow-sm animate-fade-in-zoom2" placeholder="email"></input>
            <textarea name="messages" className="min-h-20 md:min-h-32 rounded-[14px] md:rounded-[20px] mx-5 my-2 md:my-3 pt-3 pl-2 md:p-5 text-sm md:text-xl shadow-sm animate-fade-in-zoom2" placeholder="messages"></textarea>
            <button type="submit" className="bg-green text-yellow text-base md:text-2xl font-bold p-1.5 w-32 md:w-44 rounded-xl shadow-lg transition-colors hover:bg-forest place-self-center m-3 animate-fade-in-zoom3">send</button>
          </form>
        </div>
        <div className="md:w-[40%] md:mt-16 animate-fade-in-zoom3">
          <img
            src={logo}
            alt=""
            title="© 2024 Emily Chang. All rights reserved."
            className="hidden md:block contact-logo-float"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Contact;