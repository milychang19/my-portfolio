import {React, useState} from 'react';
import logo from "../elements/logo-ec.png";

const Header = () => {
  const handleScroll = (id) => {
    const dest = document.getElementById(id);
    if (dest) {
      window.scrollTo({
        top: dest.offsetTop - 70, // Adjust for any fixed header or spacing
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-beige md:bg-rose md:shadow-sm flex justify-between md:justify-start items-center px-5 pt-2 md:pt-0">
      <img src={logo} alt="" className="z-30 h-16 md:h-20 md:w-20 max-w-full mr-10" onClick={() => {setIsOpen(false); handleScroll("home");}}/>
      <div className="hidden md:block">
        <ul className="flex gap-10">
          <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("home")}>about me</li>
          <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("projects")}>project</li>
          <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("journey")}>my journey</li>
          {/* <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1">art gallery</li> */}
          <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("contact")}>contact</li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-30 md:hidden focus:outline-none"
      >
        {isOpen ? (
          // Close Icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Burger Icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Fullscreen Menu */}
      <div
        className={`z-10 fixed inset-0 bg-rose bg-opacity-95 flex flex-col items-center justify-center text-brown text-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button onClick={() => { 
          setIsOpen(false); 
          handleScroll("home");
          }} className="p-3">about me</button>
        <button onClick={() => { 
          setIsOpen(false); 
          handleScroll("projects");
          }} className="p-3">project</button>
        <button onClick={() => { 
          setIsOpen(false); 
          handleScroll("journey");
          }} className="p-3">my journey</button>
        <button onClick={() => { 
          setIsOpen(false); 
          handleScroll("contact");
          }} className="p-3">contact</button>
      </div>

    </header>
  );
};

export default Header;