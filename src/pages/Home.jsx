import React from 'react';
import portrait from '../elements/portrait.jpg';

const Home = () => {
  return (
    <section id="home">
      <h1>Emily Chang</h1>
      <img src={portrait} alt="" id="portrait"/>
      <p>Resume</p>
    </section>
  );
};

export default Home;