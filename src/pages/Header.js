import React from 'react';
import logo from "../elements/logo-ec.png";

const Header = () => {
  return (
    <section id="header">
      <header>
        <img src={logo} alt="" classname="logo"/>
        <nav class="nav-bar">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Project Highlights</a></li>
            <li><a href="#journey">My Journey</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;