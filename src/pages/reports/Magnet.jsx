import React, { useState } from 'react';

const intro = [
  "This report highlights my experience as a ",
  <strong>Software Developer</strong>,
  " at ",
  <strong>Magnet Forensics</strong>,
  " from ",
  <strong>September to December 2024</strong>,
  ". Entering the field of ",
  <strong>digital forensics</strong>,
  " I gained invaluable skills in processing digital evidence, expanded my technical knowledge, and contributed to impactful solutions that help make a ",
  <strong>positive difference</strong>,
  " in the world."
];
const company = [
  <strong>Magnet Forensics</strong>,
  " is an innovative technology company based in Waterloo, specializing in ",
  <strong>digital forensics and incident response (DFIR)</strong>,
  `. An interesting fact about Magnet Forensics is its inspiring origin story. The company was founded by a former police officer who, during his career, recognized the growing role of technology in crime and the challenges of digital investigations. Motivated by his passion for justice, he founded Magnet Forensics to improve digital investigation operations and make a meaningful impact.

  Particularly in areas related to `,
  <strong>cybersecurity, digital evidence analysis, and data recovery solutions</strong>,
  ", Magnet Forensics empowers organizations worldwide—including law enforcement agencies, private enterprises, and government entities—by providing tools to uncover digital evidence and ensure justice and security."
];
const job = [
  "As a part of the ",
  <strong>Computer Artifacts team</strong>,
  " at ",
  <strong>Magnet Forensics</strong>,
  ", my role focused on ",
  <strong>retrieving digital evidence</strong>,
  ` stored on hard disks. Our team’s goal was to provide solutions for extracting, analyzing, and reporting on this evidence, ensuring investigators had the tools they needed to uncover the truth.

With the rapid evolution of technology, staying ahead meant frequently updating our product to accommodate new features and changes. My work involved tasks like `,
  <strong>updating parsers</strong>,
  ",", 
  <strong> improving data accuracy</strong>,
  ", and ",
  <strong>researching new version updates</strong>,
  ", all while ensuring our tools remained reliable and effective."
];

const list = [
  "Researched version updates and updated artifact information.",
  "Debugged missing evidence and added checks to avoid exceptions.",
  "Ran artifact regressions and analyzed hit differences.",
  "Added new data sources and query parsing logic.",
  "Contributed to child trafficking investigations through photo hashing data.",
  "Created new artifacts, from research to implementation.",
  "Documented my work meticulously for future reference."
];

const experience = [
"Working at Magnet was both challenging and exciting because I was ",
<strong>constantly learning</strong>,
". Every new task exposed me to different aspects of ",
<strong>technical development</strong>,
" that I wasn’t familiar with, pushing me to consistently ",
<strong>research</strong>,
` and deepen my understanding of the subject.

One of the most impactful projects I worked on involved `,
<strong>calculating photo hashing data</strong>,
` to aid investigations around missing and exploited children. It was incredibly humbling to contribute to such meaningful work, knowing that our efforts could make a real difference in the world.

Another highlight was `,
<strong>creating a new artifact</strong>,
"—from ",
<strong>research to implementation</strong>,
". This full-circle experience gave me a comprehensive understanding of what goes into developing an artifact from scratch, rather than simply updating or improving existing ones. I’m especially grateful for this opportunity, as it allowed me to work on spike tickets and gain a ",
<strong>well-rounded perspective</strong>,
" before the end of my term."
];

const principle1 = [
  "Magnet Forensics placed a strong emphasis on ",
  <strong>accuracy and precision</strong>,
  `, a priority I grew to deeply appreciate. Early in my term, my manager shared feedback that shaped my approach to work: our products touch on critical evidence that could make or break an investigation. Missing even the smallest detail is not an option.`
];
const steps = [
  "Running artifact regressions and analyzing hit differences to ensure stability.",
  "Debugging for missing evidence and edge cases.",
  "Testing thoroughly and reviewing results carefully to deliver exceptional quality."
];
const principle2 = [
  "At Magnet, I learned to prioritize ",
  <strong>quality over quantity</strong>,
  ", becoming more ",
  <strong>detail-oriented</strong>,
  " and thorough in my work. These skills weren’t something I learned in class but rather on the job, where I encountered ",
  <strong>real-world challenges </strong>,
  "that demanded careful thought and execution."
];

const goals = [
  {
    title: "Become Proficient in C# for Technical Problem-Solving",
    results: [
      "Coding in a new language, I was able to complete technical tasks with progressively ",
      <strong>fewer code review issues</strong>,
      ". From each piece of ",
      <strong>valuable feedback </strong>,
      "I received, I made it a priority to learn from those mistakes, ensuring consistent improvement with every opportunity. Constantly ",
      <strong>reading and understanding existing codebases</strong>,
      " increased my familiarity with Magnet’s system, and I reached a point where I could confidently tackle and complete coding tasks independently. ",
      <strong>Debugging practices </strong>,
      "sharpened my ",
      <strong>problem-solving skills</strong>,
      " and showed me the importance of ",
      <strong>precision </strong>,
      "in producing high-quality work."
    ],
    color: "bg-quartz"
  },
  {
    title: "Enhance Professional Oral Communication Skills",
    results: [
      "From ",
      <strong>debriefs </strong>,
      "to ",
      <strong>morning stand-ups</strong>,
      ", I’ve developed the ability to present my work and provide progress updates in a ",
      <strong>clear and informative manner</strong>,
      ". This skill required a lot of practice and ",
      <strong>learning from observing </strong>,
      "my coworkers. These experiences have greatly improved my ability to ",
      <strong>communicate complex ideas </strong>,
      "and",
      <strong> collaborate effectively</strong>,
      ` with my team.
      One important lesson I learned from my manager is the value of sharing `,
      <strong>positive outcomes</strong>,
      ", not just challenges or issues. By ",
      <strong>communicating my achievements</strong>,
      ", I’m able to ",
      <strong>validate my work</strong>,
      ", take credit for my contributions, and help the team recognize the progress and impact of what I’ve accomplished."
    ],
    color: "bg-star"
  },
  {
    title: "Develop Proactive Teamwork and Professional Relationships",
    results: [
      "One particularly impactful experience was ",
      <strong>pair programming </strong>,
      "with a team member. This opportunity allowed me to ",
      <strong>learn by observing</strong>,
      " their workflow, the tools they use, and their ",
      <strong>problem-solving approach</strong>,
      ". It was fascinating to see how they tackled challenges and found solutions, which provided valuable insights into ",
      <strong>debugging practices</strong>,
      " and the importance of ",
      <strong>attention to detail</strong>,
      `.
      Through this experience, I also developed a better balance between`,
      <strong> working independently </strong>,
      "and knowing when to ",
      <strong>seek support </strong>,
      "from my team. This openness to collaboration not only helped me overcome obstacles more effectively but also strengthened my ",
      <strong>communication skills</strong>,
      " and ",
      <strong>relationships within the team.</strong>
    ],
    color: "bg-aloe"
  },
  {
    title: "Develop In-Depth Understanding of the Company System and Codebase",
    results: [
      "Spending significant time ",
      <strong>reading and analyzing existing code</strong>,
      " not only improved my ability to ",
      <strong>read other people’s work</strong>,
      " but also gave me the confidence to clearly ",
      <strong>explain an artifact and its components to others</strong>,
      ". I gained a ",
      <strong>well-rounded understanding </strong>,
      "of how an artifact is developed and how it ",
      <strong>integrates into our codebase</strong>,
      ". I now have a deeper understanding of how our product functions and how individual components contribute to its overall functionality.",
    ],
    color: "bg-sky"
  },
  {
    title: "Develop an Artifact from Scratch, from Research to Implementation",
    results: [
      `At the start of my work term, this goal felt ambitious and somewhat out of reach. However, by the end of the term, I was thrilled to have the opportunity to take ownership of a new artifact. This project involved `,
      <strong>every stage of development: researching and analyzing its functionality, understanding the database structure</strong>,
      ", and",
      <strong> writing the foundational code </strong>,
      `for the artifact.
      I developed skills in `,
      <strong>researching technical requirements, considering edge cases, querying databases, and documenting work</strong>,
      ", which were crucial for successfully integrating a new artifact.",
    ],
    color: "bg-grey"
  }
];

const conclude = [
  "Reflecting on my time at ",
  <strong>Magnet Forensics</strong>,
  ", I am incredibly grateful for the opportunities I had to ",
  <strong>learn, grow, and contribute to meaningful work</strong>,
  ". This experience taught me the importance of ",
  <strong>precision, teamwork, and continually challenging myself to improve.</strong>,
  `

  I want to extend my heartfelt thanks to my `,
  <strong>manager, Chen</strong>,
  ", for his incredible ",
  <strong>leadership</strong>,
  ". His feedback was always constructive, and instead of focusing on mistakes, he used them as ",
  <strong>lessons to help me learn and grow</strong>,
  ". His high expectations encouraged me to strive for success and made me ",
  <strong>feel supported every step of the way.</strong>,
  `

  I also deeply appreciate my `,
  <strong>mentor and interviewer, Caleb</strong>,
  ", who helped me get on my feet from the very beginning. His deep knowledge of the products and his passion for the field were contagious, ",
  <strong>inspiring</strong>,
  " me to embrace this work fully. He never hesitated to help and explained everything with details, which made a ",
  <strong>huge impact on my learning experience.</strong>,
  `

  Additionally, I want to thank `,
  <strong>Veronica </strong>,
  "for her ",
  <strong>invaluable advice</strong>,
  ", both inside and outside of work, and ",
  <strong>Danny </strong>,
  "for being an amazing partner to ",
  <strong>collaborate </strong>,
  "with. I’m also grateful to the rest of the ",
  <strong>Computer Artifacts team </strong>,
  "for their ",
  <strong>support and guidance</strong>,
  ". Everyone created a safe space where ",
  <strong>asking silly questions was encouraged</strong>,
  ", making me feel comfortable ",
  <strong>tackling challenging tasks.</strong>,
  `

  From the `,
  <strong>Artifact meetup</strong>,
  " to bonding over ",
  <strong>Dungeons & Dragons</strong>,
  ", these experiences made my time at Magnet Forensics ",
  <strong>truly enjoyable and memorable</strong>,
  ". I leave this role feeling not only more skilled but also more ",
  <strong>confident</strong>,
  " in my abilities, thanks to the incredible people who supported me along the way."
];

const Magnet = () => {
  const [currentGoal, setCurrentGoal] = useState(goals[0]); // Default to the first goal

  const handleButtonClick = (index) => {
    setCurrentGoal(goals[index]);
  };

  return (
    <div className="text-lg">
      <button onClick={() => window.history.back()} className="absolute top-10 left-10 px-4 py-2 text-4xl md:text-5xl">↩</button>
      <section id="introduction" className="py-8 px-5 md:px-48">
        <h1 className="font-sub text-4xl md:text-5xl font-bold pt-10 animate-fade-in-zoom1">my journey as a <br className="block md:hidden"/> Software Developer <br/> with Magnet Forensics</h1>
          <p className="px-4 md:w-3/4 text-center place-self-center py-5">{intro}</p>
        <hr className="mx-4 border-brown opacity-20 md:mx-14"></hr>
        <div className="my-10 md:p-10">
          <h2 className="font-sub font-bold">about Magnet Forensics</h2>
          <h3 className="pt-2 font-bold text-green italic">Unlock the Truth. Protect the Innocent.</h3>
          <div className="bg-quartz bg-opacity-50 m-5 p-7 md:p-14 rounded-[50px] shadow-md">
            <p style={{ whiteSpace: "pre-line" }}>{company}</p>
          </div>
        </div>
      </section>

      <section id="responsibilities" className="rounded-[50px] bg-matcha">
        <div className="py-8 px-5 md:px-48">
          <div className="py-4">
            <h2 className="font-sub font-bold text-forest py-3">a glimpse into my job</h2>
            <p style={{ whiteSpace: "pre-line" }} className="m-4 md:px-16">{job}</p>
          </div>
            <div className="rounded-[50px] bg-white bg-opacity-50 text-left p-7 md:px-14 md:py-8 m-2 md:w-3/4 place-self-center shadow-lg text-sm md:text-base">
            <p className="font-bold">The technology and tools I leveraged in my role:</p>
            <li>C#, Git, and SQLite</li>
            <li>Visual Studio</li>
            <li>Jira and Agile Board</li>
            <li>Jenkins for automation testing (Artifact Regression, Case Metrics)</li>
            <li>Azure DevOps</li>
          </div>
          <div className="text-left py-6 px-8 md:px-32">
            <h3 className="font-sub font-bold text-forest text-2xl mb-2">highlights of my responsibilities</h3>
            <p className="font-bold">Here’s a snapshot of the tasks I worked on:</p>
            <ul className="list-disc list-inside text-base md:text-lg">
              {list.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      
        <div className="bg-forest bg-opacity-70 rounded-[50px] py-8 px-9 md:px-48">
          <h2 className="font-sub font-bold text-beige py-3">The Most Interesting Aspects of My Job</h2>
          <p style={{ whiteSpace: "pre-line" }} className="text-beige m-4 md:px-20">{experience}</p>
        </div>
      </section>
      <section>
      
        <div className="py-8 px-9 md:px-64">
          <h2 className="font-sub font-bold text-2xl md:text-3xl py-3">Why <span className="text-blue">Precision</span> is Key at Magnet Forensics</h2>
          <div className="text-left m-4">
            <p>{principle1}</p>
            <p>This focus on precision influenced how I approached my tasks, such as:</p>
            {steps.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
            <p><br/>{principle2}</p>
          </div>
        </div>
      </section>

      <hr className="mx-9 border-brown opacity-20 md:mx-14"></hr>

      <section id="goals" className="px-5 md:px-64">
        <h2 className="font-sub font-bold pt-6">goals & growth</h2>
        <h3 className="font-bold text-green italic">Learning Outcomes</h3>

        <ul className="flex mt-4">
        {goals.map((goal, index) => (
          <li key={index}>
            <button
              onClick={() => handleButtonClick(index)}
              className={`px-4 py-2 w-20 md:w-32 rounded-t-[30px] md:rounded-t-[50px] ${goal.color} text-white font-sub transition-transform duration-100 ease-in hover:scale-y-[1.15] hover:z-5`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        </ul>

        <div className={`p-7 md:p-14 rounded-[50px] rounded-tl-none ${currentGoal.color} h-auto z-20 relative shadow-md align-middle`}>
          <h2 className="font-sub font-bold text-lg md:text-xl mb-3">{currentGoal.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{currentGoal.results}</p>
        </div>
      </section>

      <section id="acknowledgement" className="py-8 px-9 md:px-64">
        <h2 className="font-sub font-bold py-7">acknowledgement</h2>
        <p className="text-left" style={{ whiteSpace: "pre-line" }}>{conclude}</p>
      </section>
  
    </div>
  );
};

export default Magnet;