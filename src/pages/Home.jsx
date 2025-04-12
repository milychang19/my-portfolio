import React from 'react';
import portrait from '../elements/portrait.jpg';
import resume from '../elements/resume.pdf';
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home">
      <div className="flex pt-36 px-20 justify-end">
        <div className="w-[22%] p-4">
          <img src={portrait} alt="" className="mt-8 rounded-full shadow-sm animate-fade-in-zoom3 mx-auto"/>
          <a href={resume} title="Resume" target="_blank" rel="noreferrer">
            <button className="text-base relative group">view my resume
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-matcha"></span>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] group-hover:w-full group-hover:bg-brown transition-all duration-1000"></span>
            </button>
            </a>
          <div className="flex flex-row justify-center gap-3 py-3">
            <a href="https://www.linkedin.com/in/emily-chang-485962234/" target="_blank" rel="noreferrer" title="LinkedIn"><FiLinkedin/></a>
            <a href="https://github.com/milychang19" target="_blank" rel="noreferrer" title="GitHub"><FiGithub/></a>
            <a href="mailto:emily0109.ec@gmail.com" title="emily0109.ec@gmail.com"><FiMail/></a>
          </div>
        </div>
        <div className="w-2/3 p-4 text-left gap-5 flex-col flex">
          <h1 className="font-sub font-bold text-6xl">emily chang</h1>
          <ul className="grid gap-1 text-base">
            <li className="list-square hover:translate-x-1 duration-300 ease-out transition-all">computer science, mathematics <span className="underline">@UofGuelph</span></li>
            <li className="list-square hover:translate-x-1 duration-300 ease-out">upcoming VR/AI developer @GreenContributor (summer 2025)</li>
            <li className="list-square hover:translate-x-1 duration-300 ease-out">prev software developer @Magnet Forensics (fall 2024)</li>
            <li className="list-square hover:translate-x-1 duration-300 ease-out">recently:
              <ul className="grid gap-1 pl-6">
                <li className="list-hollow">created frij.io to address food insecurity with smart food management (Best AI @HackCanada)</li>
                <li className="list-hollow">created debating platform with unbiased mediator (@GenAIGenesis)</li>
              </ul></li>
            <li className="list-square hover:translate-x-1 duration-300 ease-out">teaching assistant for discrete mathematics, math tutor in high school</li>
            <li className="list-square hover:translate-x-1 duration-300 ease-out">residence assistant since August 2023</li>
            <li className="list-square hover:translate-x-1 duration-300 ease-out">enjoy graphic designs, cryptography and more!</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center py-12">
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-4xl mb-4">↓</span>
          <p className="text-lg font-semibold text-gray-800">read more</p>
        </div>
      </div>
    </section>
  );
};

export default Home;