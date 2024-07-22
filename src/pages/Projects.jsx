import React from 'react';

const records = () => [
  {
    name: "ResShiftGenerator",
    link: "https://github.com/milychang19/ResShiftGenerator",
    image: require("../elements/project-card1.jpg"),
    description: "A full-stack application that minimizes human errors in shift scheduling. By implementing SQLite and NumPy, it efficiently parses and integrates CSV files and manages the structured team database.",
    tags: ["Python", "HTML", "CSS"],
  },
  {
    name: "BattleshipGameAI",
    link: "https://github.com/milychang19/BattleshipGameAI",
    image: require("../elements/project-card2.jpg"),
    description: "A game involving Machine Learning and AI algorithm to analyze and predict opponents' battleship placements. Utilized UML design and object-oriented development principles to enhance gameplay and establish a robust and reliable system.",
    tags: ["Java", "OOP"],
  },
  {
    name: "MancalaGame",
    link: "https://github.com/milychang19/MancalaGame",
    image: require("../elements/project-card3.jpg"),
    description: "Employing object-oriented design and serialization, the game includes game saving and other rule settings. Unit testing was conducted to validate inheritance abstraction and error handling. The robust code demonstrates great modularity and extensibility.",
    tags: ["Java", "OOP", "Swing"],
  }
]

const tagColors = ["bg-coral", "bg-mint", "bg-star"];

const Projects = () => {
  const projectRecords = records();

  return (
    <section id="projects" className="mb-24">
      <h1 className="font-sub text-5xl font-bold text-brown p-10">project highlights</h1>
      <div className="flex gap-x-10 place-content-center">
        {projectRecords.map((project, index) => (
          <div key={index} className="bg-sage shadow-card rounded-[50px] p-5 py-8 w-80">
            {/* <img src={project1} alt=""></img> */}
            <img src={project.image} alt=""></img>
            <h3 className="font-title text-brown bg-sky pb-4 backdrop:"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
            {/* <div className="bg-sky pb-4"></div> */}
            <p className="text-base text-justify text-brown my-1">{project.description}</p>
            <ul className="flex gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <li key={index} className={`text-base rounded-2xl w-fit px-4 py-1 shadow-sm ${tagColors[index % tagColors.length]}`}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;