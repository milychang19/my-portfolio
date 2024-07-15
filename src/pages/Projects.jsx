import React from 'react';
import project1 from "../elements/project-card1.jpg";

// const records = () => [
//   {
//     name: "ResShiftGenerator",
//     link: "https://github.com/milychang19/ResShiftGenerator",
//     description: "A full-stack application that minimizes human errors in shift scheduling. By implementing SQLite and NumPy, it efficiently parses and integrates CSV files and manages the structured team database.",
    
//   },
//   {
//     name: "BattleshipGameAI",
//     link: "https://github.com/milychang19/BattleshipGameAI",
//     description: "A game involving Machine Learning and AI algorithm to analyze and predict opponents' battleship placements. Utilized UML design and object-oriented development principles to enhance gameplay and establish a robust and reliable system.",
//   },
//   {
//     name: "MancalaGame",
//     link: "https://github.com/milychang19/MancalaGame",
//     description: "Employing object-oriented design and serialization, the game includes game saving and other rule settings. Unit testing was conducted to validate inheritance abstraction and error handling. The robust code demonstrates great modularity and extensibility.",
//   }
// ]

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <h1 className="font-sub text-5xl font-bold text-brown p-10">project highlights</h1>
      <div class="project-container">
        <div class="project-card">
          <img src={project1} alt="" class="card-img"></img>
          <h3><a href="https://github.com/milychang19/ResShiftGenerator" target="_blank" rel="noreferrer">ResShiftGenerator</a></h3>
          <p class="description">...</p>
        </div>
        <div class="project-card">
          <img src={project1} alt="" class="card-img"></img>
          <h3><a href="https://github.com/milychang19/BattleshipGameAI" target="_blank" rel="noreferrer">BattleshipAI</a></h3>
          <p class="description">...</p>
        </div>
        <div class="project-card">
          <img src={project1} alt="" class="card-img"></img>
          <h3><a href="https://github.com/milychang19/MancalaGame" target="_blank" rel="noreferrer">MancalaGame</a></h3>
          <p class="description">...</p>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;