import React from 'react';

const selfIntro = "Hello! My name is Emily. I'm a computer science student with a passion for solving logic problems and creating art. I thrive on challenging work that drives me to learn and grow every day. On campus, I serve as a residence assistant, building strong relationships to support students in their university life. I bring passion to everything I do, from academic projects to personal hobbies. Outside of work and studies, I appreciate artistic endeavors. Sometimes, I lose myself for hours creating new Spotify playlists or get wrapped up by a good film.";
const quote = "“The only way to do great work is to love what you do” -Steve Jobs";
// const updates ="Currently, I'm working on ... at Magnet Forensics";

const About = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Trigger the animation when the component mounts
  //   setIsLoaded(true);
  // }, []);

  return (
    <section id="about" className="md:my-20 my-8">
      
      <h1 className="font-sub text-6xl md:text-7xl text-blue italic font-xbold pr-12 md:pr-24 animate-fade-in-zoom1">About</h1>
      <h1 className="font-sub text-6xl md:text-7xl text-blue italic font-xbold pl-28 relative top-[-10px] animate-fade-in-zoom1">Me</h1>
      <p className="text-justify md:text-center px-12 md:px-24 lg:px-0 lg:w-1/2 pb-5 text-sm md:text-lg inline-block first-letter:text-3xl md:first-letter:text-5xl animate-fade-in-zoom2">{selfIntro}</p>
      <p className="text-center italic text-xl mx-12 md:mx-[10%] lg:mx-[26%] text-green font-sub font-[500] border-l-4 border-green animate-fade-in-zoom3">{quote}</p>
    </section>
  );
};

export default About;