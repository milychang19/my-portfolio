import React from 'react';
import logo from "../elements/logo-ec.png";

const Header = () => {
  return (
    <section id="header">
      <header className="flex justify-items-start	items-center bg-matcha px-5">
        <a href="#header"><img src={logo} alt="" className="h-24 w-24 max-w-full "/></a>
        <nav className="font-sub m-5">
          <ul className="flex gap-5">
            <li className="box-border w-32 font-[350] hover:font-normal"><a href="#about">About Me</a></li>
            <li className="box-border w-28 font-[350] hover:font-normal"> <a href="#projects">Projects</a></li>
            <li className="box-border w-28 font-[350] hover:font-normal"><a href="#journey">Journey</a></li>
            <li className="box-border w-28 font-[350] hover:font-normal"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;