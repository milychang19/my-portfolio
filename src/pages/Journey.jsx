import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const work = () => [
  {
    position: "Full-Stack Developer Intern",
    company: "@Retailogists",
    time: "Jan 2026 - Aug 2026",
    description: "Retailogists was my first startup experience. Working in a fast-paced environment across Shopify storefront development and app integrations taught me to drive my internship and take on challenges with confidence.",
  },
  {
    position: "Residence Assistant",
    company: "@University of Guelph Student Housing",
    time: "Aug 2023 - Apr 2026",
    description: "This role strengthened my leadership and conflict resolution skills. Beyond enforcing building policies and safety protocols, I fostered a positive community through engaging events and meaningful relationships with students, helping create a sense of belonging and security.",
  },
  {
    position: "VR/AI Developer",
    company: "@GreenContributor",
    time: "May 2025 - Aug 2025",
    description: "I gained experience developing applications from backend architecture and making technical decisions to bringing them to life. I also had the chance to work with the Moore Institute for Plastic Pollution Research, where I developed data solutions to help solve challenges.",
  },
  {
    position: "Software Developer",
    company: "@Magnet Forensics",
    time: "Sept 2024 - Dec 2024",
    description: "I was honored to be part of the Computer Artifacts team, contributing to tools that support justice and security. From parsing photo hashes to extensive debugging for high-precision solutions, this experience gave me practical skills in digital forensics and strengthened my passion for building solutions that make a difference.",
  },
  {
    position: "Digital Marketing Designer",
    company: "@Google Developer Student Club",
    time: "Jan 2024 - May 2025",
    description: "I gained valuable experience in event organization and digital promotion. I assisted with workshops and event planning while creating sponsorship and hacker packages and designing social media posts to support our GDSC hackathon.",
  },
  {
    position: "Teaching Assistant",
    company: "@University of Guelph",
    time: "Jan 2024 - Apr 2024",
    description: "With my passion for mathematics, I enjoyed holding tutorials and office hours for Discrete Mathematics. I provided clear guidance to help students understand complex concepts and built strong relationships with them. Seeing their growth in problem-solving was especially rewarding and helped me discover a genuine passion for helping others succeed.",
  },
  {
    position: "Front-End Developer",
    company: "@bizZone Inc.",
    time: "Mar 2022 - Jun 2022",
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
  const handleClickF24 = () => {
    navigate("/F24-work-term-report");
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const handleClickS25 = () => {
    navigate("/S25-work-term-report");
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const handleClickW26 = () => {
    navigate("/W26-work-term-report");
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const getReportHandler = (company) => {
    if (company === "@Magnet Forensics") return handleClickF24;
    if (company === "@GreenContributor") return handleClickS25;
    if (company === "@Retailogists") return handleClickW26;
    return null;
  };

  return (
    <section id="journey" className="p-4 md:p-0 md:mb-24">
      <h1 className="font-sub text-4xl md:text-5xl font-bold pb-10 animate-fade-in-zoom1">my journey</h1>
      {workExperiences.map((experience, index) => {
        const reportHandler = getReportHandler(experience.company);

        return (
          <div key={index} className={`md:flex mb-10 mx-8 md:mx-40 justify-center duration-300 md:hover:translate-x-1 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:w-1/4 md:pt-1">
              <p className="text-sm md:text-xl text-right animate-fade-in-zoom2">{experience.time}</p>
            </div>
            <div className="text-left md:pl-8 md:w-[63%]">
              <p className="font-sub font-bold pr-1 text-xl md:text-2xl inline-block animate-fade-in-zoom3">{experience.position}</p>
              <p className={`font-sub text-base font-[600] inline-block italic duration-200 text-green md:text-brown animate-fade-in-zoom3 ${hoveredIndex !== null && hoveredIndex === index ? 'md:text-green duration-200':''}`}>{experience.company}</p>

              <p className="text-sm md:text-base pt-2 animate-fade-in-zoom4">{experience.description}</p>

              {reportHandler && (
                <div className="mt-3 animate-fade-in-zoom3">
                  <button
                    type="button"
                    onClick={reportHandler}
                    className="text-brown text-xs md:text-sm py-2"
                  >
                    [view work term report]
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Journey;