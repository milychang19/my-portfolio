import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer" className="pb-6 p-12 md:pt-16 md:pb-4 opacity-80">
      <div className="flex flex-col items-center gap-3">
        <div className="flex justify-center gap-3 text-brown text-lg">
          <a href="https://www.linkedin.com/in/emilychang19/" target="_blank" rel="noreferrer" title="LinkedIn" className="transform transition-transform duration-300 hover:scale-110"><FiLinkedin /></a>
          <a href="https://github.com/milychang19" target="_blank" rel="noreferrer" title="GitHub" className="transform transition-transform duration-300 hover:scale-110"><FiGithub /></a>
          <a href="mailto:emily0109.ec@gmail.com" title="emily0109.ec@gmail.com" className="transform transition-transform duration-300 hover:scale-110"><FiMail /></a>
        </div>
        <p className="text-sm md:text-base">no cookies needed © 2026 emily chang</p>
      </div>
    </section>
  );
};

export default Footer;