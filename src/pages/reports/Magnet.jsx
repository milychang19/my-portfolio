import React from 'react';

const intro = `This report highlights my experience as a Software Developer at Magnet Forensics from September to December 2024. Entering the field of digital forensics, I gained invaluable skills in processing digital evidence, expanded my technical knowledge, and contributed to impactful solutions that help make a positive difference in the world.`;
const company = `Magnet Forensics is an innovative technology company based in Waterloo, specializing in digital forensics and incident response (DFIR). An interesting fact about Magnet Forensics is its inspiring origin story. The company was founded by a former police officer who, during his career, recognized the growing role of technology in crime and the challenges of digital investigations. Motivated by his passion for justice, he founded Magnet Forensics to improve digital investigation operations and make a meaningful impact.

Particularly in areas related to cybersecurity, digital evidence analysis, and data recovery solutions, Magnet Forensics empowers organizations worldwide—including law enforcement agencies, private enterprises, and government entities—by providing tools to uncover digital evidence and ensure justice and security.`;
const job = `As a part of the Computer Artifacts team at Magnet Forensics, my role focused on retrieving digital evidence stored on hard disks. Our team’s goal was to provide solutions for extracting, analyzing, and reporting on this evidence, ensuring investigators had the tools they needed to uncover the truth.

With the rapid evolution of technology, staying ahead meant frequently updating our product to accommodate new features and changes. My work involved tasks like updating parsers, improving data accuracy, and researching new version updates, all while ensuring our tools remained reliable and effective.`;

const list = [
  "Researched version updates and updated artifact information.",
  "Debugged missing evidence and added checks to avoid exceptions.",
  "Ran artifact regressions and analyzed hit differences.",
  "Added new data sources and query parsing logic.",
  "Contributed to child trafficking investigations through photo hashing data.",
  "Created new artifacts, from research to implementation.",
  "Documented my work meticulously for future reference."
];

const experience = `Working at Magnet was both challenging and exciting because I was constantly learning. Every new task exposed me to different aspects of technical development that I wasn’t familiar with, pushing me to consistently research and deepen my understanding of the subject.
One of the most impactful projects I worked on involved photo hashing data for missing and exploited child investigations. It was incredibly humbling to contribute to such meaningful work, knowing that our efforts could make a real difference in the world.

Another highlight was creating a new artifact—from research to implementation. This full-circle experience gave me a comprehensive understanding of what goes into developing an artifact from scratch, rather than simply updating or improving existing ones. I’m especially grateful for this opportunity, as it allowed me to work on spike tickets and gain a well-rounded perspective before the end of my term.`;

const principle1 =`Magnet Forensics placed a strong emphasis on accuracy and precision, a priority I grew to deeply appreciate. Early in my term, my manager shared feedback that shaped my approach to work: our products touch on critical evidence that could make or break an investigation. Missing even the smallest detail is not an option.`;
const steps = [
  "Running artifact regressions and analyzing hit differences to ensure stability.",
  "Debugging for missing evidence and edge cases.",
  "Testing thoroughly and reviewing results carefully to deliver exceptional quality."
];
const principle2 =`At Magnet, I learned to prioritize quality over quantity, becoming more detail-oriented and thorough in my work. These skills weren’t something I learned in class but rather on the job, where I encountered real-world challenges that demanded careful thought and execution.`;

const goals = [
  {
    title: "Become Proficient in C# for Technical Problem-Solving",
    results: "Coding in a new language, I was able to complete technical tasks with progressively fewer code review issues. From each piece of valuable feedback I received, I made it a priority to learn from those mistakes, ensuring consistent improvement with every opportunity. Constantly reading and understanding existing codebases increased my familiarity with Magnet’s system, and I reached a point where I could confidently tackle and complete coding tasks independently. Debugging practices sharpened my problem-solving skills and showed me the importance of precision in producing high-quality work."
  },
  {
    title: "Enhance Professional Oral Communication Skills",
    results: `From debriefs to morning stand-ups, I’ve developed the ability to present my work and provide progress updates in a clear and informative manner. This skill required a lot of practice and learning from observing my coworkers. These experiences have greatly improved my ability to communicate complex ideas and collaborate effectively with my team.
One important lesson I learned from my manager is the value of sharing positive outcomes, not just challenges or issues. By communicating my achievements, I’m able to validate my work, take credit for my contributions, and help the team recognize the progress and impact of what I’ve accomplished.`
  },
  {
    title: "Develop Proactive Teamwork and Professional Relationships",
    results: `One particularly impactful experience was pair programming with a team member. This opportunity allowed me to learn by observing their workflow, the tools they use, and their problem-solving approach. It was fascinating to see how they tackled challenges and found solutions, which provided valuable insights into debugging techniques and the importance of attention to detail.
Through this experience, I also developed a better balance between working independently and knowing when to seek support from my team. This openness to collaboration not only helped me overcome obstacles more effectively but also strengthened my communication skills and relationships within the team.`
  },
  {
    title: "Develop an Artifact from Scratch, from Research to Implementation",
    results: `At the start of my work term, this goal felt ambitious and somewhat out of reach. However, by the end of the term, I was thrilled to have the opportunity to take ownership of a new artifact. This project involved every stage of development: researching and analyzing its functionality, understanding the database structure, and writing the foundational code for the artifact.
I developed skills in researching technical requirements, considering edge cases, querying databases, and documenting work, which were crucial for successfully integrating a new artifact.`
  },
  {
    title: "Develop In-Depth Understanding of the Company System and Codebase",
    results: "Spending significant time reading and analyzing existing code not only improved my ability to navigate but also gave me the confidence to clearly explain an artifact and its components to others. I gained a well-rounded understanding of how an artifact is developed and how it integrates into our codebase. I now have a deeper understanding of how our product functions and how individual components contribute to its overall functionality."
  }
];

const conclude = [
  "Reflecting on my time at Magnet Forensics, I am incredibly grateful for the opportunities I had to learn, grow, and contribute to meaningful work. This experience taught me the importance of precision, teamwork, and continually challenging myself to improve.",
  "I want to extend my heartfelt thanks to my manager, Chen, for his incredible leadership. His feedback was always constructive, and instead of focusing on mistakes, he used them as lessons to help me learn and grow. His high expectations encouraged me to strive for success and made me feel supported every step of the way.",
  "I also deeply appreciate my mentor and interviewer, Caleb, who helped me get on my feet from the very beginning. His deep knowledge of the products and his passion for the field were contagious, inspiring me to embrace this work fully. He never hesitated to help and explained everything with details, which made a huge impact on my learning experience.",
  "Additionally, I want to thank Veronica for her invaluable advice, both inside and outside of work, and Danny for being an amazing partner to collaborate with. I’m also grateful to the rest of the Computer Artifacts team for their support and guidance. Everyone created a safe space where asking silly questions was encouraged, making me feel comfortable tackling challenging tasks.",
  "From the Artifact meetup to bonding over Dungeons & Dragons, these experiences made my time at Magnet Forensics truly enjoyable and memorable. I leave this role feeling not only more skilled but also more confident in my abilities, thanks to the incredible people who supported me along the way."
];

const Magnet = () => {
  return (
    <div className="text-lg">
      <section id="introduction" className="py-8 px-48">
        <h1 className="font-sub text-4xl md:text-5xl font-bold text-brown pt-10 animate-fade-in-zoom1">my journey as a Software Developer <br/> with Magnet Forensics</h1>
          <p className="w-3/4 text-center place-self-center py-5">{intro}</p>
        <hr className="border-brown opacity-50 mx-14"></hr>
        <div className="p-10">
          <h2 className="font-sub font-bold text-4xl text-brown">About Magnet Forensics</h2>
          <h3 className="font-sub font-bold text-green italic">Unlock the Truth. Protect the Innocent.</h3>
          <div className="bg-quartz bg-opacity-50 m-5 mb-0 p-14 rounded-[50px]">
            <p style={{ whiteSpace: "pre-line" }}>{company}</p>
          </div>
        </div>
        <section>
          </section>
      </section>

      <section id="responsibilities" className="rounded-[50px] bg-matcha py-8 px-48">
        <div>
          <h2 className="font-sub font-bold text-4xl text-forest">A Glimpse into My Job</h2>
          <p style={{ whiteSpace: "pre-line" }} className="m-4 px-10">{job}</p>
        </div>
        <div className="rounded-[50px] bg-white bg-opacity-50 text-left px-14 py-8 m-4 w-3/4 place-self-center">
          <p className="font-bold">The technology and tools I leveraged in my role:</p>
          <li>C#, Git, and SQLite</li>
          <li>Visual Studio</li>
          <li>Jira and Agile Board</li>
          <li>Jenkins for automation testing (Artifact Regression, Case Metrics)</li>
          <li>Azure DevOps</li>
        </div>
        <div className="text-left">
          <h3 className="font-sub font-bold text-forest">highlights of my responsibilities</h3>
          <p>Here’s a snapshot of the tasks I worked on during my term:</p>
          {list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </div>
        <div className="bg-blue bg-opacity-70">
          <h2 className="font-sub font-bold text-white">The Most Interesting Aspects of My Job</h2>
          <p className="text-white">{experience}</p>
        </div>
        <div>
          <h2 className="font-sub font-bold">Why Precision is Key at Magnet Forensics</h2>
          <p>{principle1}</p>
          <p>This focus on precision influenced how I approached my tasks, such as:</p>
          {steps.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
          <p>{principle2}</p>
        </div>
      </section>

      <section id="goals">
          <div>
          {goals.map((goal, index) => (
            <div>
              <h3 className="font-sub font-bold">{goal.title}</h3>
              <p>{goal.results}</p>
            </div>
        ))}
          </div>
      </section>

      <section id="acknowledgement">
        {conclude.map((sec, index) => (
          <p>{sec}</p>
        ))}
      </section>
  
    </div>
  );
};

export default Magnet;