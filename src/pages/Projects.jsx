import React, {useState} from 'react';
// import { MdArrowOutward } from "react-icons/md";

const records = () => [
  {
    name: "frij.io",
    link: "https://github.com/megdcosta/frijio",
    image: require("../elements/project-card5.jpg"),
    description: "A food management app that tracks household pantry, splits expenses, and suggests AI-powered recipes. By leveraging Google Vision API for receipt scanning (OCR) and Perplexity AI for recipe recommendations and expiration tracking, it addresses food insecurity problem and won the Best AI Award at Hack Canada.",
    tags: ["Perplexity", "Next.js", "Firestore"],
  },
  {
    name: "MancalaGame",
    link: "https://github.com/milychang19/MancalaGame",
    image: require("../elements/project-card3.jpg"),
    description: "Employing object-oriented design and serialization, the game includes game saving and other rule settings. Unit testing was conducted to validate inheritance abstraction and error handling. The robust code demonstrates great modularity and extensibility.",
    tags: ["Java", "OOP", "Swing"],
  },
  {
    name: "ResShiftGenerator",
    link: "https://github.com/milychang19/ResShiftGenerator",
    image: require("../elements/project-card1.jpg"),
    description: "A full-stack application that minimizes human errors in shift scheduling. By implementing SQLite and NumPy, it efficiently parses and integrates CSV files and manages the structured team database.",
    tags: ["Python", "HTML", "CSS"],
  },
  {
    name: "Convoco",
    link: "https://github.com/Quoctynoob/Convoco",
    image: require("../elements/project-card4.jpg"),
    description: "A real-time debate platform featuring a genAI mediator that fact-checks, provides translations, and delivers unbiased feedback. The platform uses statistics to generate results and includes a leaderboard for competitive debaters, ensuring fair and objective assessments.",
    tags: ["TypeScript", "Next.js", "Firebase"],
  },
  {
    name: "Waffles or Pancakes",
    link: "https://github.com/P541M/waffles-or-pancakes",
    image: require("../elements/project-card6.jpg"),
    description: "A fun interactive web app where users vote between waffles and pancakes to settle the age-old debate. Developed with Psalm Eleazar, who handled the backend using React and Axios, while I focused on the creative aspects of front-end design and user experience.",
    tags: ["Node.js", "Express.js", "Axios", "MongoDB"],
  },
  {
    name: "BattleshipGame",
    link: "https://github.com/milychang19/BattleshipGameAI",
    image: require("../elements/project-card2.jpg"),
    description: "A game involving Machine Learning and AI algorithm to analyze and predict opponents' battleship placements. Utilized UML design and object-oriented development principles to enhance gameplay and establish a robust and reliable system.",
    tags: ["Java", "OOP"],
  },
]

const tagColors = ["bg-coral", "bg-mint", "bg-star", "bg-star"];

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
      <div className="inline-flex mx-5 gap-x-10 place-content-center scroll-auto snap-x snap-normal snap-proximity pl-10 md:pl-40">
        {projectRecords.map((project, index) => (
          <div key={index} className={`bg-sage shadow-card rounded-[50px] p-5 py-8 w-80 snap-start ease-in-out transition-all duration-300 animate-fade-in-zoom2 ${
            hoveredIndex === index ? 'drop-shadow-card -translate-y-1' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave} 
          >
            <img src={project.image} alt="" className="h-40 w-full object-cover animate-fade-in-zoom3"></img>
            <h3 className={`font-title relative inline-flex items-baseline w-max pb-4 z-20 after:absolute after:bg-sky after:h-8 after:bottom-0 after:w-full after:block after:scale-y-50 after:duration-300 after:ease-out after:transition-transform after:-z-10 animate-fade-in-zoom3 ${hoveredIndex === index ? 'after:bottom-2 after:scale-y-[80%]' : ''} whitespace-nowrap`}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              {/* <MdArrowOutward className="w-4 align-baseline" /> */}
            </h3>
            <p className="text-sm md:text-base text-justify my-1 animate-fade-in-zoom4">{project.description}</p>
            <ul className="flex gap-2 mt-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <li key={index} className={`text-xs md:text-sm rounded-2xl w-fit px-4 py-1 drop-shadow animate-fade-in-zoom4 ${tagColors[index % tagColors.length]}`}>
                  {tag}
                </li>
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