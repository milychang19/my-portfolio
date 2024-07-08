import React from 'react';
import project1 from "../elements/project-card1.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h1>project highlights</h1>
      <div class="project-container">
        <div class="project-card">
          <img src={project1} alt="" class="card-img"></img>
          <h3><a href="https://github.com/milychang19/ResShiftGenerator" target="_blank" rel="noreferrer">ResShiftGenerator</a></h3>
          <p class="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a...</p>
        </div>
        <div class="project-card">
          <img src={project1} alt="" class="card-img"></img>
          <h3><a href="https://github.com/milychang19/BattleshipGameAI" target="_blank" rel="noreferrer">BattleshipGameAI</a></h3>
          <p class="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a...</p>
        </div>
        <div class="project-card">
          <img src={project1} alt="" class="card-img"></img>
          <h3><a href="https://github.com/milychang19/MancalaGame" target="_blank" rel="noreferrer">MancalaGame</a></h3>
          <p class="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a...</p>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;