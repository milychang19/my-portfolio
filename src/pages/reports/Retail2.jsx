import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../elements/retailogists-logo.png';

const intro = [
    "The second part of my journey with Retailogists took place from May to August 2026, where I continued working as a Full-Stack Developer Intern with a focus on Shopify store development. This term, I focused on deepening my existing skills while expanding my knowledge through more advanced development work. With more experience in ecommerce development, I was able to deliver work more efficiently, provide more feedback to the team, participate more actively in discussions, and take on backend integrations and automations. I also gained exposure to a wider range of tools and became more confident in problem-solving. This report reflects on the experiences, challenges, and growth I encountered throughout the term."
]

const retailogists = [
    "Retailogists is a company that helps retailers grow through branding, ecommerce development, and data-driven technology solutions. The company works with retailers around the world to redesign ecommerce websites and develop systems that improve analytics, maintenance, and customer experience.\n\nAs a startup, Retailogists does not have fixed development teams. Instead, I worked with different developers and project managers depending on the client and project, which gave me the opportunity to work with different people and adapt to different ways of working.\n\nDuring this term, we also started a weekly engineers’ meeting where team members presented what they had been working on. This gave me the opportunity to learn about other developers’ work, including Avia and Orca, our company’s internal products focused on store data and traffic. Working at a smaller company also allowed me to get to know many of the developers and gain a better understanding of the different work happening across the company."
]

const job = [
    "This term, my main focus was helping the company deliver Shopify stores for two major clients. Building on the skills I developed during my previous term, I further expanded my experience with backend integrations, automations, and third-party apps.\n\nI contributed to the successful delivery of a new Shopify website for a major client while continuing to support other ongoing projects. I participated in a significant portion of the frontend development and took on more backend integration work. This included using Shopify Flow to create customized automations and integrating email marketing and other external apps to meet client requirements."
]

const challenges = [
    "With more opportunities to work on backend integrations and automations, I had to learn new tools to achieve specific client requirements. At times, it was difficult to determine whether an issue was caused by my implementation or a limitation of the tool itself. I learned to communicate my findings with the project manager, review documentation, and reach out to app support to confirm whether a requirement was technically possible. I became much more comfortable reaching out to technical support and applying what I learned to future projects, which helped me solve similar problems more efficiently.\n\nI also gained more experience working with live Shopify stores. One project involved redesigning an existing live store, meaning changes to its data could potentially affect the live website. This taught me to be more careful when changing data types or performing large-scale data manipulation. When I was unsure about the impact of a change, I would ask another developer to review it before proceeding. This required clear communication during problem-solving, especially when working under client pressure and managing the risks of making changes to a live website."
]

const goals = [
  {
    title: "Expand My Responsibilities in Shopify Development",
    results: [
      "I learned more about the backend logic of Shopify stores and how to handle integration challenges while customizing unfamiliar tools to meet client needs, such as email marketing and store map integrations. I worked through technical challenges by researching documentation and reaching out to customer support when needed to ensure solutions were achievable and could be delivered successfully. As I gained more knowledge, I was able to provide more support to project managers and the development team by sharing my findings, suggesting solutions based on past experience, and taking on more complex work. This has helped me become more confident in working with unfamiliar technologies."
    ],
    color: "bg-quartz"
  },
  {
    title: "Proactively Identify and Communicate Potential Issues",
    results: [
      "I have noticed that I communicate much more proactively compared to where I was 8 months ago. Beyond asking questions early on my own tickets to clarify scope and expectations, I have also started bringing potential issues I notice to my manager. I even took the initiative to find solutions before bringing them to the project manager when something may have been missed during QA. I think this shows my passion for my work and my commitment to delivering the best result possible. I also had a chance to demonstrate this when I accidentally made a mistake that affected a live website. I communicated the issue early, recognized its urgency, and took responsibility while getting my team’s help to resolve it. This helped demonstrate my growth in proactively communicating issues and taking responsibility for my work."
    ],
    color: "bg-star"
  },
  {
    title: "Effectively Manage My Work Schedule Across Time Zones",
    results: [
      "After discussing the expectations and risks of working abroad, my manager and I came to an agreement for me to stay online during Toronto’s working hours while living in a country that was 12 hours ahead for a month. I was able to maintain the consistency and quality of my work, fulfill my responsibilities, and deliver everything as expected. I also received positive feedback from my project manager, and there were no issues caused by the time difference. On a personal note, it was incredibly nice having my dog, Octa <3, stay with me until 4 a.m. every weekday. He was definitely my emotional support during those late nights and made the experience much more enjoyable."
    ],
    color: "bg-aloe"
  },
  {
    title: "Build Stronger Relationships With My Coworkers",
    results: [
      "After 8 months at Retailogists, I’m really happy to feel like I’m part of the team. I had the chance to meet some coworkers in person and get to know them beyond work. I became much more comfortable having casual conversations about their lives and recent updates. Despite working remotely, I feel that I was able to build meaningful relationships and develop a strong sense of belonging within the team. I also really valued the mentorship from my manager, who taught me a lot and provided helpful guidance for my career."
    ],
    color: "bg-sky"
  }
];

const conclude = [
    "None of this would have been possible without my supervisor, Prateek Sanyal. I am grateful that he trusted me with eight months of opportunity and encouraged me to take ownership of my work. He gave me the flexibility to work abroad while providing suggestions and constructive feedback whenever I needed it. I truly appreciate his support and hope to make him proud.\n\nI would also like to thank all the project managers and developers I had the opportunity to work with. A special shoutout to Aaron Hoffman, who I learned a great deal from. I truly enjoyed my time with the team and appreciated the opportunities to learn from my mistakes, take on new challenges, and grow throughout my internship. The project managers provided me with support and guidance throughout my work, while the developers shared their experiences and knowledge with me. They’re a big part of what made Retailogists such a meaningful place. It has been an honour to be part of the team."
];

const Retail2 = () => {
    const [currentGoal, setCurrentGoal] = useState(goals[0]);
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setCurrentGoal(goals[index]);
    };

    return (
        <div className="text-lg overflow-x-hidden">
            <button
                onClick={() => navigate('/')}
                aria-label="Go back"
                className="block ml-4 mt-4 md:fixed md:top-24 md:left-10 z-0 px-3 py-2"
            >
                [back]
            </button>

            <section
                id="introduction"
                className="min-h-screen flex flex-col justify-center gap-12 md:gap-20 py-20 md:py-32 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48"
            >
                <div className="flex flex-col items-center gap-3">
                    <img
                        src={logo}
                        alt="Retailogists Logo"
                        className="w-24 h-24 object-cover rounded-xl m-4 animate-fade-in-zoom1"
                    />

                    <h1 className="font-sub text-3xl md:text-5xl font-bold animate-fade-in-zoom2 leading-8 text-center">
                        another chapter at Retailogists
                    </h1>
                </div>

                <p
                    className="max-w-4xl mx-auto text-justify mb-8 md:mb-20 animate-fade-in-zoom3"
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {intro}
                </p>

                <div className="max-w-4xl mx-auto">
                    <h2 className="font-sub font-bold mb-6 md:mb-10 animate-fade-in-zoom1">
                        ⋆˚࿔ Retailogists 𝜗𝜚˚⋆
                    </h2>

                    <div className="bg-[#85a69b] bg-opacity-50 my-5 py-12 p-6 md:p-14 rounded-[50px] shadow-md text-justify animate-fade-in-zoom2">
                        <p style={{ whiteSpace: 'pre-line' }} className="animate-fade-in-zoom3">{retailogists}</p>
                    </div>
                </div>
            </section>

            <section id="responsibilities" className="rounded-[50px] bg-matcha py-12">
                <div className="px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
                    <div className="md:py-4">
                        <h2 className="font-sub font-bold m-6 md:m-10 animate-fade-in-zoom1">
                            <span className="text-xl">✧˚ · . </span>
                            my contributions
                            <span className="text-xl"> . ˚ ✧ .</span>
                        </h2>

                        <p
                            style={{ whiteSpace: 'pre-line' }}
                            className="max-w-4xl mx-auto text-justify mt-6 md:mt-10 animate-fade-in-zoom2"
                        >
                            {job}
                        </p>
                    </div>

                    <div className="rounded-[50px] bg-white bg-opacity-50 text-left p-6 md:p-14 py-12 mt-10 max-w-4xl mx-auto shadow-lg text-sm md:text-base animate-fade-in-zoom2">
                        <p className="font-bold mb-2 animate-fade-in-zoom3">
                            technical skills
                        </p>

                        <div className="pl-3 space-y-1 animate-fade-in-zoom3">
                            <li>
                                <span className="font-bold">tools:</span>{' '}
                                Shopify Flow, Claude Code, Figma MCP
                            </li>
                            <li>
                                <span className="font-bold">third-party app integrations:</span>{' '}
                                Brevo, Stockist, Wysh, My Product Cares
                            </li>
                            <li>
                                <span className="font-bold">marketing integrations:</span>{' '}
                                email & SMS marketing, product registration, price-drop and low-stock notifications, newsletter popups and embedded forms                            </li>
                            <li>
                                <span className="font-bold">data management:</span>{' '}
                                large-scale Shopify data management and store location data integration
                            </li>
                            <li>
                                <span className="font-bold">web development:</span>{' '}
                                accessibility and localization
                            </li>
                        </div>
                    </div>
                </div>

                <section className="w-full py-10 md:pt-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
                    <h2 className="font-sub font-bold text-xl md:text-2xl text-forest p-2 animate-fade-in-zoom2">
                        overcoming challenges
                    </h2>

                    <div className="mt-5 max-w-4xl mx-auto text-base md:text-lg animate-fade-in-zoom3">
                        <p className="text-justify" style={{ whiteSpace: 'pre-line' }}>
                            {challenges}
                        </p>
                    </div>
                </section>
            </section>

            <section
                id="goals"
                className="py-10 md:py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-sub font-bold mb-6 md:mb-10 animate-fade-in-zoom1">☆ learning outcomes ☆</h2>
                    <ul className="flex mt-4 animate-fade-in-zoom1">
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

                    <div
                        className={`py-12 p-6 md:p-14 rounded-[50px] rounded-tl-none animate-fade-in-zoom1 ${currentGoal.color} h-auto z-20 relative shadow-md align-middle`}
                    >
                        <h2 className="font-sub font-bold text-base md:text-xl mb-3 animate-fade-in-zoom2">
                            {currentGoal.title}
                        </h2>

                        <p style={{ whiteSpace: 'pre-line' }} className="text-justify animate-fade-in-zoom3">
                            {currentGoal.results}
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="acknowledgement"
                className="py-8 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 animate-fade-in-zoom1"
            >
                <h2 className="font-sub font-bold mb-6 md:mb-10">
                    acknowledgement
                </h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-justify animate-fade-in-zoom2" style={{ whiteSpace: 'pre-line' }}>
                        {conclude}
                    </p>
                </div>
            </section>
            <div className="w-full flex px-6 pt-4 sm:px-10 md:px-20 lg:px-32 xl:px-64">
                <button
                    onClick={() => { navigate('/W26-work-term-report'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50); }}
                    className="px-3 py-2"
                >
                    ◀ [winter report]
                </button>
            </div>
        </div>
    );
};

export default Retail2;
