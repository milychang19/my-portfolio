import React from 'react';
import portrait from '../elements/portrait.jpg';
import resume from '../elements/resume.pdf';

const Home = () => {
  return (
    <section id="home">
      <svg viewBox="0 0 500 100">
        <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text x="20%"><textPath href="#curve">Emily Chang</textPath></text>
      </svg>
      <img src={portrait} alt="" id="portrait"/>
      <p><a href={resume} title="Resume" target="_blank" rel="noreferrer" class="pdf-button"><button>Resume</button></a></p>      
    </section>
  );
};

export default Home;