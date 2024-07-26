import React, {useState} from 'react';

const work = () => [
  {
    position: "Digital Marketing Designer",
    company: "@Google Developer Student Club",
    time: "January 2024 - May 2024",
    description: "I gained valuable experience in event organization and digital promotion. I assisted in workshops and supported the groundwork executions. By creating sponsorship and hacker packages, as well as designing social media posts, I optimized the promotion and the flow of our GDSC hackathon event.",
  },
  {
    position: "Teaching Assistant",
    company: "@University of Guelph",
    time: "January 2024 - April 2024",
    description: "Due to my passion for mathematical concepts, I enjoyed holding tutorials and office hours for Discrete Mathematics. I provided clear guidance to simplify complex applications, ensuring students easily grasped the material. I built strong relationships with many students and found it fulfilling to witness their growth in problem solving. Through this role, I discovered a genuine love for teaching and helping others succeed.",
  },
  {
    position: "Residence Assistance",
    company: "@University of Guelph Student Housing",
    time: "August 2023 - April 2024",
    description: "This role strengthened my leadership and conflict resolution skills. Beyond enforcing building policies and safety protocols, I fostered a positive community by facilitating engaging and fun events. I built meaningful relationships with students, helping them feel a sense of belonging and security.",
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


  return (
    <section id="journey" className="md:mb-24">
      <h1 className="font-sub text-4xl md:text-5xl font-bold text-brown p-10 animate-fade-in-zoom1">my journey</h1>
      {workExperiences.map((experience, index) => (
        <div key={index} className={`md:flex mb-10 mx-8 md:mx-40 justify-center duration-300 hover:translate-x-1 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mw-[90px]">
            <p className="text-base md:text-xl text-right animate-fade-in-zoom2">{experience.time}</p>
          </div>
          <div className="text-left md:pl-8 md:w-[63%]">
            <p className="font-sub font-bold pr-1 text-xl md:text-2xl inline-block animate-fade-in-zoom3">{experience.position}</p>
            <p className={`font-sub text-base font-[600] inline-block italic duration-200 ${hoveredIndex !== null && hoveredIndex === index ? 'text-green duration-200':''}`}>{experience.company}</p>
            <p className="text-sm md:text-base pt-2 animate-fade-in-zoom4">{experience.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Journey;