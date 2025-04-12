import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";


const work = () => [
  {
    position: "Residence Assistance",
    company: "@University of Guelph Student Housing",
    time: "August 2023 - Present",
    description: "This role strengthened my leadership and conflict resolution skills. Beyond enforcing building policies and safety protocols, I fostered a positive community by facilitating engaging and fun events. I built meaningful relationships with students, helping them feel a sense of belonging and security.",
  },
  {
    position: "Software Developer",
    company: "@Magnet Forensics",
    time: "September 2024 - December 2024",
    description: "I was honored to be part of the Computer Artifacts team, contributing to tools that deliver justice and security to the community. From assisting with parsing photo hashes to performing extensive debugging for high-precision solutions, this experience equipped me with practical skills in digital forensics and deepened my passion for creating solutions that make a positive difference in the world."
  },
  {
    position: "Digital Marketing Designer",
    company: "@Google Developer Student Club",
    time: "January 2024 - Present",
    description: "I gained valuable experience in event organization and digital promotion. I assisted in workshops and supported the groundwork executions. By creating sponsorship and hacker packages, as well as designing social media posts, I optimized the promotion and the flow of our GDSC hackathon event.",
  },
  {
    position: "Teaching Assistant",
    company: "@University of Guelph",
    time: "January 2024 - April 2024",
    description: "Due to my passion for mathematical concepts, I enjoyed holding tutorials and office hours for Discrete Mathematics. I provided clear guidance to simplify complex applications, ensuring students easily grasped the material. I built strong relationships with many students and found it fulfilling to witness their growth in problem solving. Through this role, I discovered a genuine love for teaching and helping others succeed.",
  },
  {
    position: "Front-End Developer",
    company: "@bizZone Inc.",
    time: "March 2022 - June 2022",
    description: "Focusing on front-end development and project tracking, this opportunity has enhanced my ability to manage time efficiently, communicate clearly with team members, and maintain a high standard of work quality despite the challenges of working remotely.",
  }
]

const Journey = () => {
  const workExperiences = work();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  //hoveredIndex:  track the index of the currently hovered project card.

  //event handlers
  const handleMouseEnter = (index) => {
    setHoveredIndex(index); //set to the current hovered card
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); //set to null when the mouse leave
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/F24-work-term-report");
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <section id="journey" className="md:mb-24">
      <h1 className="font-sub text-4xl md:text-5xl font-bold p-10 animate-fade-in-zoom1">my journey</h1>
      {workExperiences.map((experience, index) => (
        <div key={index} className={`md:flex mb-10 mx-8 md:mx-40 justify-center duration-300 hover:translate-x-1 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-1/3">
            <p className="text-base md:text-xl text-right animate-fade-in-zoom2">{experience.time}</p>
          </div>
          <div className="text-left md:pl-8 md:w-[63%] cursor-pointer"
            {...(experience.company === "@Magnet Forensics" ? { onClick: handleClick } : {})}>  

            <p className="font-sub font-bold pr-1 text-xl md:text-2xl inline-block animate-fade-in-zoom3">{experience.position}</p>
            
            <p className={`font-sub text-base font-[600] inline-block italic duration-200 ${hoveredIndex !== null && hoveredIndex === index ? 'text-green duration-200':''}`}>{experience.company}</p>
            {experience.company === "@Magnet Forensics" && (
              <MdArrowOutward className={`inline-block size-5 ${hoveredIndex !== null && hoveredIndex === index ? 'fill-green duration-200':''}`}/>
              // <button className="bg-star text-brown bg-opacity-70 text-sm px-10 py-2 rounded-full shadow-sm hover:bg-opacity-100 transition transition-500 animate-fade-in-zoom3" onClick={() =>navigate("/F24-work-term-report")}>View Work Term Report</button>
              // <button className="bg-transparent border-brown border-2 border-opacity-10 text-brown text-sm px-10 py-2 rounded-full shadow-sm hover:bg-brown hover:bg-opacity-20 hover:text-beige transition transition-500 animate-fade-in-zoom3" onClick={handleClick}>View Work Term Report</button>
            )}
            <p className="text-sm md:text-base pt-2 animate-fade-in-zoom4">{experience.description}</p>
          </div>
        </div>
      ))}
      
      </section>
  );
};

export default Journey;