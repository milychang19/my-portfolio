import React, { useState } from 'react';
import image1 from '../../elements/IMG_1807.jpg';
import image2 from '../../elements/IMG_6172.JPG';
import image3 from '../../elements/IMG_6643.jpg';
import project1 from '../../elements/Project1.svg';
import project2 from  '../../elements/Project2.svg';

const intro = [
    "From May to August 2025, I worked as a VR/AI Developer Co-op at GreenContributor, which included a three-week global fellowship at the Moore Institute in Long Beach, California. During this term, I contributed to two exciting projects: developing an educational mobile app called FutureMindsChallenges and creating technology solutions to tackle plastic pollution. I learned new technologies, took on greater responsibility in planning and decision-making, and gained hands-on experience in sustainability-focused research challenges."
]
const greenContributor = [
    "GreenContributor Inc. is an organization dedicated to advancing environmental and educational initiatives. They provide global opportunities for students to engage in entrepreneurship and research-based programs, encouraging innovative solutions to real sustainability challenges that impact communities and inspire leadership in creating change.\n\nDuring my co-op term, I had the chance to experience these initiatives firsthand. I collaborated with Saddle River Day School to run the FutureMindsChallenge, a mathematical competition that encouraged students to think creatively about problem-solving. In addition, through GreenContributor’s strong partnership with the Moore Institute for Plastic Pollution Research, I contributed to projects focused on ocean conservation and developed technology solutions to support microplastic research and plastic pollution education."
]
const moore = [
    "The Moore Institute for Plastic Pollution Research is a non-profit organization and one of GreenContributor’s closest partners. They are dedicated to analyzing plastic pollution in oceans, beaches, and lakes, with a particular focus on analyzing microplastic particles using advanced methods such as FTIR image processing.\n\nFounded by Captain Charles Moore, the oceanographer who discovered the Great Pacific Garbage Patch, the institute’s mission is to expand public understanding of plastic pollution and its impact on marine life and human health."
]
const job = [
    "My responsibilities centred around two exciting projects. The first was the FutureMindsChallenge mobile app, which I developed in a team of two. In this project, I took on a leadership role, making key design and technical decisions to help guide the direction of the application. \n\nThe second was my fellowship project with the Moore Institute for Plastic Pollution Research, where I worked on creating technology solutions to improve microplastic measurement and streamline research processes in the lab."
]

const projectGreen = [
    "Designed RESTful API endpoints for quizzes, results, and user management",
    "Built a modular Express.js backend architecture with centralized routing",
    "Designed and implemented database schemas and wrote PostgreSQL queries",
    "Created Supabase functions to efficiently retrieve data",
    "Integrated RESTful APIs and JWT authentication for secure communication between the Flutter frontend and backend",
    "Designed intuitive, engaging user interface layouts and illustrations in Figma",
    "Supported beta testing with students worldwide, troubleshooting issues and improving the overall user experience"
]

const myRole = [
    "Manual microplastic analysis can be very time-consuming, especially when dealing with large sample sizes where each particle must be measured under a microscope one by one. To address this, we explored a program that automated part of the process. Using high-contrast checkerboard images, the system could detect plastic particles in each grid and then apply a secondary tool to measure their size and scale. The results were exportable to a CSV file for further research."

]

const projectMoore = [
    "Organized particle measurements into structured datasets",
    "Applied perspective transformation to correct image distortion",
    "Incorporated auto-cropping and scaling in Python",
    "Used OpenCV and PyImageJ to automate particle detection and measurement",
    "Implemented multiprocessing to significantly reduce manual processing time",
    "Presented our work and future research directions to stakeholders at the Moore Institute"
]

const goals = [
  {
    title: "Develop Skills in Mobile App Development and Technology Integrations",
    results: [
      "For our FutureMindsChallenge project, I took initiative to learn mobile app development through online resources, explored different technology options and design approaches. I participated in technical discussions where I shared insights and helped guide key tech stack decisions. These experiences strengthened my skills in planning, teamwork, and collaboration, while also giving me the confidence to make important technical choices in future roles. The project ultimately highlighted my ability to understand the reasoning behind each integration. It had a successful beta testing and mathematical competition with students."
    ],
    color: "bg-quartz"
  },
  {
    title: "Strengthen Team Collaboration and Leadership in Project Planning",
    results: [
      "Working closely with my project partner, I took on a senior role by offering support and guidance. I gave constructive feedback while also stepping back at times to give them space to explore their own ideas. Together, we set clear project objectives, held regular check-ins with our supervisor, and adapted our approach as needed. Through this process, I gained valuable experience in effective collaboration, learned how to support others with confidence, and demonstrated leadership in managing project direction."
    ],
    color: "bg-star"
  },
  {
    title: "Explore VR and AI Development Projects",
    results: [
      "Although I didn’t work on VR research or AI integration during my co-op, I had a lot of fun exploring emerging virtual reality technologies. I experimented with the Meta Quest VR headsets, which allowed me to try out 3D painting and explore new creative possibilities. It was an intuitive and exciting experience that made creative activities more accessible and engaging for students."
    ],
    color: "bg-aloe"
  },
  {
    title: "Build Meaningful Connections and Network During Travel",
    results: [
      "A highlight of my experience was meeting people from around the world and learning from their diverse perspectives. I connected with high school students from other countries and shared my university experiences with them. I also met passionate young adults who are actively finding creative ways to make positive changes in the world. Listening to their stories was truly exciting, and I deeply appreciate the friendships I made along the way. It also makes me happy to see the positive impact I had on them, and it made me realize the powerful ways I can influence people and contribute to change.",
    ],
    color: "bg-sky"
  },
  {
    title: "Contribute to Microplastic Research and Environmental Impact Studies",
    results: [
      "The opportunity to improve the microplastic analysis process through image processing was an incredible learning experience. Within a week, I picked up new tools and developed functions that significantly reduced manual processing time. While in California, I also visited marine conservation organizations along the coast, including AltaSea, where I explored ocean innovation and student-led sustainability projects, and the Marine Mammal Care Center. Finally, I presented our work to students, sharing how technology can be applied to environmental challenges and encouraging them to see themselves as part of the solution.",
    ],
    color: "bg-grey"
  }
];

const conclude = [
    "I’m incredibly grateful to GreenContributor for making so many opportunities possible for me. Through this experience, I gained hands-on exposure to innovative projects, worked with people from diverse backgrounds, and expanded my perspective by traveling to new places and challenging myself to grow. A special thank you to George Koshy, my supervisor, who constantly came up with ambitious and innovative ideas. He actively connected me with opportunities and gave me the resources to pursue them, which I’m truly grateful for. His effort to open doors for me made this co-op a truly unique experience.\n\n I’m also thankful to my two traveling partners across the States. To Jaeden, my coding partner, it was both of our first times developing for mobile, and working together through obstacles was a great learning experience that helped us both grow. To Manar, my traveling roommate, her inspiring story, dedication, and curiosity to make the world a better place taught me so much. She brought her uplifting spirit and passion to our work, leaving a lasting impact on everyone around her <3. \n\nFinally, I would like to thank the Moore Institute for Plastic Pollution Research for this rare and exciting opportunity. Having hands-on lab experience in California was truly memorable. Thank you to Win for helping with logistics, guiding us, and giving us the space to explore research projects on our own. And thanks to everyone at the institute who made us feel welcomed and answered all our questions. I’ll never forget the inspiring work I was part of at Moore, and being able to work right next to the harbour with the ocean just outside and the chance to walk along the water during breaks. It honestly felt like a dream"
];
const Green = () => {
    const [currentGoal, setCurrentGoal] = useState(goals[0]); // Default to the first goal
    
    const handleButtonClick = (index) => {
    setCurrentGoal(goals[index]);
    };

    return (
    <div className="text-lg overflow-x-hidden">
        <section id="introduction" className="py-20 md:py-32 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
        <div className="max-w-4xl mx-auto">
            <h1 className="font-sub text-3xl md:text-5xl font-bold pt-16 md:pt-24 animate-fade-in-zoom1 mb-10">
            my journey with <br />
            <span className="text-2xl md:text-4xl">⋆˚࿔</span> GreenContributor <span className="text-xl md:text-4xl">𝜗𝜚˚⋆</span>
            </h1>

            <p className="text-justify py-8 md:py-12 md:pb-24">{intro}</p>
        </div>

        {/* <hr className="max-w-4xl mx-auto border-brown opacity-20 w-full" /> */}

        <div className="max-w-4xl mx-auto mb-6 mt-28">
            <h2 className="font-sub font-bold mb-6 md:mb-10">
            about <span className="text-green">GreenContributor</span>
            </h2>

            <div className="bg-[#85a69b] bg-opacity-50 p-6 py-12 md:p-14 md:py-20 rounded-[50px] shadow-md text-justify">
            <p style={{ whiteSpace: "pre-line" }}>{greenContributor}</p>
            </div>
        </div>
        </section>

        <section id="Moore">
        <div className="bg-sky bg-opacity-70 rounded-[50px] py-12 md:py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 ">
            <div className="max-w-4xl mx-auto">
            <h3 className="text-[#46606f] font-bold text-left text-sm md:text-lg">
                Fellowship Research Opportunity ⋆˚꩜｡
            </h3>

            <h2 className="font-sub font-bold text-2xl mb-6 md:mb-14">
                Moore Institute for Plastic Pollution Research
            </h2>

            <p style={{ whiteSpace: "pre-line" }} className="text-justify">{moore}</p>

            <div className="flex justify-center gap-2 md:gap-12 mt-12">
                <img src={image1} alt="" className="rounded-lg w-1/2 md:w-1/3 shadow-md" />
                <img src={image2} alt="" className="rounded-lg w-1/2 md:w-1/3 shadow-md" />
            </div>
            </div>
        </div>
        </section>

        <section id="responsibilities" className="rounded-[50px] bg-matcha py-12 md:py-20">
        <div className="px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
            <div className="max-w-4xl mx-auto">
            <h2 className="font-sub font-bold mt-10 md:mt-16 mb-6 md:mb-10">
                <span className="text-xl">✧˚ · .</span> major projects <span className="text-xl">. ˚ ✧ .</span>
            </h2>

            <p className="text-justify" style={{ whiteSpace: "pre-line" }}>{job}</p>
            </div>

            <div className="rounded-[50px] bg-white bg-opacity-50 text-left py-12 p-6 md:p-14 mt-10 max-w-4xl mx-auto shadow-lg text-sm md:text-base">
            <p className="font-bold mb-2">The technology and tools I leveraged in my role:</p>
            <div className="pl-3 space-y-1">
                <li><span className="font-bold">Mobile Dev:</span> Next.js, Flutter (Dart)</li>
                <li><span className="font-bold">Backend:</span> Express.js (session), RESTful API design, JWT authentication</li>
                <li><span className="font-bold">Database & Clouds:</span> MySQL, PostgreSQL, Supabase</li>
                <li><span className="font-bold">Tools:</span> Git, Trello, Figma</li>
                <li><span className="font-bold">Image Processing:</span> Python, OpenCV, ImageJ</li>
            </div>
            </div>
        </div>

        <section className="w-full py-10 md:pt-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
            <div className="max-w-4xl mx-auto">
                <h3 className="font-bold">˙⋆✮ Project 1</h3>
                <h2 className="font-sub font-bold text-xl md:text-2xl text-forest p-2 mb-6 md:mb-10">
                FutureMindsChallenge: App Development
                </h2>
            </div>

            <img
                src={project1}
                alt="decorative horizontal SVG"
                className="hidden md:block w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2"
            />

            <div className="max-w-4xl mx-auto mt-5 text-left text-base md:text-lg">
                <ul className="list-disc list-inside space-y-2">
                {projectGreen.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
                </ul>
            </div>
            </section>

        <section className="w-full py-10 md:pt-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
            <div className="max-w-4xl mx-auto">
            <h3 className="font-bold">˙⋆✮ Project 2</h3>
            <h2 className="font-sub font-bold text-xl md:text-2xl text-forest p-2 mb-6 md:mb-10">
                Automating Microplastic Analysis: Image Processing
            </h2>
            </div>

            <img
                src={project2}
                alt="decorative horizontal SVG"
                className="hidden md:block w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2"
            />
            <div className="max-w-4xl mx-auto mt-5 text-left text-base md:text-lg">
            <p className="pb-5">{myRole}</p>
            <p className="font-bold mb-2">My contributions included:</p>
            <ul className="list-disc list-inside space-y-2">
                {projectMoore.map((point, index) => (
                <li key={index}>{point}</li>
                ))}
            </ul>
            </div>
        </section>
        </section>

        <section id="goals" className="py-10 md:py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-sub font-bold">☆ learning outcomes ☆</h2>
            <h3 className="font-text font-bold text-green pt-1 italic mb-6 md:mb-10">Goals & Growth</h3>

            <ul className="flex mt-4">
                {goals.map((goal, index) => (
                <li key={index}>
                    <button
                    onClick={() => handleButtonClick(index)}
                    className={`px-4 py-2 w-14 md:w-32 rounded-t-[25px] md:rounded-t-[50px] ${goal.color} text-white font-sub transition-transform duration-100 ease-in hover:scale-y-[1.15] hover:z-5`}
                    >
                    {index + 1}
                    </button>
                </li>
                ))}
            </ul>

            <div className={`py-12 p-6 md:p-14 rounded-[50px] rounded-tl-none ${currentGoal.color} h-auto z-20 relative shadow-md align-middle`}>
            <h2 className="font-sub font-bold text-base md:text-xl mb-3">{currentGoal.title}</h2>
            <p style={{ whiteSpace: "pre-line" }} className="text-justify">{currentGoal.results}</p>
            </div>
        </div>
        </section>

        <section id="CaptainCharles" className="py-10 md:py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-sub font-bold text-2xl md:text-3xl">thinking beyond the box</h2>
            <h3 className="font-bold text-[#46606f] pt-1 italic mb-6 md:mb-10">
            Why Action on Sustainability Can't Wait
            </h3>

            <div className="flex flex-col md:flex-row items-start gap-6 mt-6 justify-center">
            <img src={image3} alt="" className="w-2/5 md:w-[32%] object-cover mx-auto md:mx-0" />

            <div className="flex flex-col gap-4">
                <p className="text-left leading-relaxed">During my visit to California, I had the honour of visiting Captain Charles Moore at his home, where he shared a powerful reminder:</p>
                <p className="text-left leading-relaxed border-l-4 border-gray-400 pl-4 italic">"We can’t wait for the box to be empty before we think outside the box."</p>
                <p className="text-left leading-relaxed">His words and this experience reminded me that addressing microplastic pollution cannot wait. Meaningful action is needed now before the damage to our oceans and marine life becomes irreversible.</p>
                <p className="text-left leading-relaxed">What technology can do is create more data and information, which helps people realize the seriousness of the issue and drives the need for urgent action. Through innovative solutions, we can accelerate environmental research and provide people with the tools and insights needed to take action.</p>
            </div>
            </div>
        </div>
        </section>

        <section id="acknowledgement" className="py-12 md:py-20 md:pt-8 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
            <h2 className="font-sub font-bold mb-6 md:mb-10">
                acknowledgement
            </h2>
        <div className="max-w-4xl mx-auto">
            <p className="text-justify" style={{ whiteSpace: "pre-line" }}>{conclude}</p>
        </div>
        </section>
    </div>
    );
};

export default Green;