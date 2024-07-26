import React from 'react';
import portrait from '../elements/portrait.jpg';
import resume from '../elements/resume.pdf';

const Home = () => {
  return (
    <section id="home">
        <svg viewBox="0 0 500 100" className="animate-fade-in-zoom2">
          <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text x="20%" className="font-title text-4xl fill-green"><textPath href="#curve">Emily Chang</textPath></text>
        </svg>
        <img src={portrait} alt="" className="w-1/4 h-auto mx-auto rounded-full justify-center relative -top-[80px] shadow-md animate-fade-in-zoom3"/>
      <a href={resume} title="Resume" target="_blank" rel="noreferrer"><button className="bg-green text-yellow text-base md:text-2xl font-bold p-1.5 w-32 md:w-44 rounded-xl shadow-lg transition-color hover:bg-forest relative top-[-30px] animate-fade-in-zoom4">Resume</button></a>
    </section>
  );
};

export default Home;