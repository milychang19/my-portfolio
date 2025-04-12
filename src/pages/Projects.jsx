import React, {useState} from 'react';
import { MdArrowOutward } from "react-icons/md";

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="projects" className="mb-12">
      <h1 className="font-sub text-4xl md:text-5xl font-bold p-10 animate-fade-in-zoom1">project highlights</h1>
      <div class="overflow-x-auto py-5 px-5">
      <div className="inline-flex mx-5 gap-x-10 place-content-center">
        {projectRecords.map((project, index) => (
          <div key={index} className={`bg-sage shadow-card rounded-[50px] p-5 py-8 w-80 ease-in-out transition-all duration-300 animate-fade-in-zoom2 ${
            hoveredIndex === index ? 'drop-shadow-card -translate-y-1' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave} 
          >
            <img src={project.image} alt="" className="h-40 object-cover animate-fade-in-zoom3"></img>
            <h3 className={`font-title relative inline-flex items-baseline w-max pb-4 z-20 after:absolute after:bg-sky after:h-8 after:bottom-0 after:w-full after:block after:scale-y-50 after:duration-300 after:ease-out after:transition-transform after:-z-10 animate-fade-in-zoom3 ${hoveredIndex === index ? 'after:bottom-2 after:scale-y-[80%]' : ''} whitespace-nowrap`}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              <MdArrowOutward className="w-4 align-baseline" />
            </h3>
            <p className="text-sm md:text-base text-justify my-1 animate-fade-in-zoom4">{project.description}</p>
            <ul className="flex gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <li key={index} className={`text-xs md:text-base rounded-2xl w-fit px-4 py-1 drop-shadow animate-fade-in-zoom4 ${tagColors[index % tagColors.length]}`}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;