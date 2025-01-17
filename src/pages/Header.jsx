import React from 'react';
import logo from "../elements/logo-ec.png";

const Header = () => {
  const handleScroll = (id) => {
    const dest = document.getElementById(id);
    if (dest) {
      window.scrollTo({
        top: dest.offsetTop - 50, // Adjust for any fixed header or spacing
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <section id="header">
      {/* sticky */}
      <header className="sticky flex justify-center md:justify-start md:justify-items-start	items-center bg-matcha px-5"><img src={logo} alt="" className="hidden md:block h-24 w-24 max-w-full " onClick={() => handleScroll("header")}/>
        <nav className="font-sub m-5">
          <ul className="flex gap-5">
            <li className="cursor-pointer box-border text-base md:text-2xl w-24 md:w-32 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1" onClick={() => handleScroll("about")}>About Me</li>
            <li className="cursor-pointer box-border text-base md:text-2xl w-20 md:w-28 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1" onClick={() => handleScroll("projects")}>Projects</li>
            <li className="cursor-pointer box-border text-base md:text-2xl w-20 md:w-28 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1" onClick={() => handleScroll("journey")}>Journey</li>
            <li className="cursor-pointer box-border text-base md:text-2xl w-20 md:w-28 font-[350] hover:font-normal duration-300 animate-fade-in-zoom1" onClick={() => handleScroll("contact")}>Contact</li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;