import React from 'react';

const selfIntro = "Hello! My name is Emily. I'm a computer science student with a passion for solving logic problems and creating art. I thrive on challenging work that drives me to learn and grow every day. On campus, I serve as a residence assistant, building strong relationships to support students in their university life. I bring passion to everything I do, from academic projects to personal hobbies. Outside of work and studies, I appreciate artistic endeavors. Sometimes, I lose myself for hours creating new Spotify playlists or get wrapped up by a good film.";

const About = () => {
  return (
    <section id="about" className="my-20">
      <h1 className="font-sub text-7xl text-blue italic font-xbold pr-24">About</h1>
      <h1 className="font-sub text-7xl text-blue italic font-xbold pl-28 relative top-[-10px]">Me</h1>
      <p className="px-52 py-5">{selfIntro}</p>
    </section>
  );
};

export default About;