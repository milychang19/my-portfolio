import React from 'react';
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

  return (
    <header className="sticky top-0 z-50 bg-rose shadow-sm flex justify-start md:justify-items-start items-center px-5"><img src={logo} alt="" className="hidden md:block h-20 w-20 max-w-full mr-10" onClick={() => handleScroll("home")}/>
          <ul className="flex gap-10">
            {/* <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1" onClick={() => handleScroll("home")}>about me</li> */}
            <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("home")}>about me</li>
            <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("projects")}>project</li>
            <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("journey")}>my journey</li>
            {/* <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1">art gallery</li> */}
            <li className="cursor-pointer box-border text-base md:text-xl inline-block duration-300 animate-fade-in-zoom1 underline-hover" onClick={() => handleScroll("contact")}>contact</li>
          </ul>
    </header>
  );
};

export default Header;