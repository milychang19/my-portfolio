import React from 'react';
import logo from "../elements/logo-ec.png";

const Header = () => {
  return (
    <section id="header">
      <header className="flex justify-center md:justify-start md:justify-items-start	items-center bg-matcha px-5">
        <a href="#header"><img src={logo} alt="" className="hidden md:block h-24 w-24 max-w-full "/></a>
        <nav className="font-sub m-5">
          <ul className="flex gap-5">
            <li className="box-border text-base md:text-2xl w-24 md:w-32 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1"><a href="#about">About Me</a></li>
            <li className="box-border text-base md:text-2xl w-20 md:w-28 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1"> <a href="#projects">Projects</a></li>
            <li className="box-border text-base md:text-2xl w-20 md:w-28 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1"><a href="#journey">Journey</a></li>
            <li className="box-border text-base md:text-2xl w-20 md:w-28 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;