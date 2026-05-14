import React, { useState } from 'react';

const intro = [
    "From January to April 2026, I worked as a Full-Stack Developer Intern at Retailogists, where I contributed to both ecommerce websites and the development of the company’s Shopify app, Avia. During my internship, I worked on building frontend websites for clients using Shopify tools while also participating in backend and analytics-focused app development. Working at a startup company gave me responsibilities that requires me to adapt quickly, manage multiple projects, and deliver work under tight deadlines. This report reflects on my experience working in a fast-paced startup environment, the technical and professional skills I developed, and the projects I contributed to throughout my work term. It highlights different aspects of my role, the challenges I faced, and the lessons I learned while collaborating with a team."
]
const retailogists = [
    "Retailogists is a startup company that focuses on helping retailers grow through branding, ecommerce development, and data-driven technology solutions. The company works with retailers across the world by redesigning ecommerce websites using Shopify tools and developing systems that improve analytics, maintenance, and customer experience.",
    "One of the company’s major products is Avia, a retail analytics platform designed to bring ecommerce-style analytics into physical retail stores. Avia allows retailers to monitor traffic, conversion rates, customer behaviour, and store performance in real time. The company places a strong emphasis on building long-term relationships with retailers while continuously expanding its technology and services. As a growing startup, Retailogists operates in a fast-paced environment where collaboration, adaptability, and continuous improvement are highly important."
]
const job = [
    "My role at Retailogists focused on two main areas: web development and app development. Throughout the internship, I balanced multiple projects at once while working under tight deadlines and client expectations. Since Retailogists is a startup company, delivering work quickly and consistently was very important to maintain project momentum and support company growth. This environment pushed me to improve my time management, communication, and technical skills while learning how to adapt to fast-changing priorities."
]

const webDev = [
    "A major part of my role involved building ecommerce websites for brand redesigns or site recreations using Shopify tools. I often worked on multiple brands simultaneously, balancing priorities between different clients and project timelines. During this process, I gained experience working with Shopify themes, Liquid storefront development, and custom styling and logic to create websites that matched each client’s branding and business goals. I also completed the Shopify Development Fundamentals certification, which strengthened my understanding of Shopify theme development and storefront customization.",
    "My contributions ranged from larger features, such as product listing pages, headers, branding themes, to smaller tasks like fixing styling issues and debugging website problems. I also gained exposure to SEO-related tasks, including robots.txt configurations, indexing, and search engine safeguards.",
    "In addition, I worked with automation tools and third-party integrations, including email automation systems, Google Sheets integrations on Wix, Unbounce, and Calendly. Since many projects required learning unfamiliar technologies quickly, I became more comfortable adapting to new tools and workflows. I also learned ways to streamline development processes more efficiently by connecting workflows between Figma and MCP tools."
]

const appDev = [
    "Alongside web development, I also participated in the development of Retailogists’ Avia product. Avia is a technology platform that helps bridge the gap between ecommerce analytics and physical retail stores by collecting and analyzing both in-store and online retail data.",
    "One feature I contributed to was the development of a store organizer system, which allows clients with many registered stores to group, manage, compare, and view store data more efficiently. This project involved working with TypeScript and PostgreSQL database migrations.",
    "I also contributed to a larger feature called Labour Analysis, which introduced a new dashboard focused on labor efficiency and conversion metrics. This dashboard used staff labour-hour data to generate insights such as Sales Per Labor Hour, helping retailers make better staffing and scheduling decisions. As part of this project, I worked on a Python API that fetched Shopify data using scheduled background tasks that considered store time zones. I also worked with data ingestion pipelines, BigQuery, and Google Cloud Platform infrastructure to improve data retrieval efficiency and reduce Shopify API limitations. By moving data workflows into BigQuery, the platform became faster and more scalable, improving dashboard loading performance and overall efficiency.",
    "This project was especially rewarding because I was able to gain more backend development experience while turning data into meaningful insights that help retailers make better business decisions."
]

const goals = [
  {
    title: "Increase My Day-to-Day Efficiency Through Workflow and Prioritization",
    results: [
      "Throughout my internship, I improved my day-to-day efficiency by developing a more organized and repeatable workflow for planning, prioritizing, and executing tasks. Working in a fast-paced startup environment required me to balance multiple deadlines and quickly adapt to shifting priorities while still maintaining the quality of my work. I became better at managing my time by clearly communicating expectations with my project manager and supervisor, especially during high-pressure situations such as helping launch a new website under a tight deadline. As I became more efficient, I was able to consistently deliver work on time while also receiving positive feedback from my team for helping reduce their workload during busy periods."
    ],
    color: "bg-quartz"
  },
  {
    title: "Improve Communication and Team Collaboration",
    results: [
      "I strengthened my communication skills by consistently providing clear updates on my progress, blockers, priorities, and timelines. I regularly updated task statuses, left comments explaining my progress or questions, tagged the appropriate team members when needed, and asked clarification questions early in development. This communication style helped projects move more smoothly because team members always understood what stage I was at and what support I needed. I also learned how important it was to communicate shifting priorities, especially when urgent projects required immediate attention. Over time, I received positive feedback from my supervisor regarding the clarity of my updates, and eventually I was trusted to work on projects almost fully independently with minimal supervision."
    ],
    color: "bg-star"
  },
  {
    title: "Improve Creative Contributions and Media Content Development",
    results: [
      "One of my goals was to contribute more creatively to the company through media assets and content ideas, and I successfully improved in this area throughout the internship. I helped create bi-weekly changelog posts for product updates, where I explained new features and improvements in a clear and engaging way for both clients and potential business partners. I also created media content using screen recordings and demonstrations that showcased how the app used storefront data to provide useful retail insights. These posts helped communicate technical concepts in a more accessible and visually engaging format. As I gained more experience, my creative drafts required fewer revisions and became more aligned with the company’s branding and communication goals, showing growth in both my creativity and understanding of audience engagement."
    ],
    color: "bg-aloe"
  },
  {
    title: "Build Confidence With Ecommerce Tools and Data-Driven Features",
    results: [
      "Throughout the internship, I became more comfortable working with ecommerce tools and contributing to meaningful data-driven features within the Avia platform. My work on Avia, such as organizing store information and showing how staffing hours can affect in-store sales, showed me how impactful it can be to turn data into tools that help businesses make better decisions. I also gained hands-on experience with backend workflows, including Shopify data, scheduled processes, BigQuery, and Google Cloud Platform. This goal helped me grow more confident not only in using ecommerce technologies, but also in understanding how data-focused development can create practical value for clients."
    ],
    color: "bg-sky"
  },
  {
    title: "Learn More About Store Development and Data Migration Processes",
    results: [
      "Although I did not fully achieve this goal, I made meaningful progress toward understanding the store development and data migration process throughout the internship. By observing project managers, developers, and planning discussions, I gained a better understanding of how client requirements, store data, and project expectations are handled during development. While I have not yet contributed major insights during these discussions, I became more familiar with the workflow and did some data-related tasks. Overall, I still want to continue improving my confidence in contributing ideas and participating more actively in planning and migration discussions in future work experiences."
    ],
    color: "bg-grey"
  }
];

const conclude = [
    "I would like to thank Prateek, our CTO, supervisor, and mentor throughout my internship. At the beginning of the work term, he provided frequent support, guidance, and regular check-ins while also encouraging me to drive my own internship by taking ownership of my work and growth. He gave me valuable advice about career paths, professional development, and the expectations of working in a fast-paced development environment. Our conversations helped me better understand both my strengths and the areas where I could continue improving.\n\nI would also like to thank Aaron, who I collaborated with on many projects during the internship. He was always willing to help when needed and became someone I looked up to professionally because of his work ethic and technical skills. Working alongside him taught me a lot about collaboration, problem-solving, and development workflows.\n\nFinally, I would like to thank the rest of the developers and project managers at Retailogists for creating such a supportive and welcoming environment. Everyone I worked with was helpful, encouraging, and enjoyable to collaborate with. (I am especially grateful that I will be continuing my journey with the company for another four months. and there’s more for me to improve on)"
];
const Retail = () => {
    const [currentGoal, setCurrentGoal] = useState(goals[0]); // Default to the first goal
    
    const handleButtonClick = (index) => {
    setCurrentGoal(goals[index]);
    };

    return (
        <div className="text-lg">
            <button onClick={() => window.history.back()} className="absolute top-5 left-2 md:top-10 md:left-10 px-4 py-2 text-4xl md:text-5xl hidden md:block">↩</button>
            <section id="introduction" className="py-8 px-5 md:px-48">
                <h1 className="font-sub text-3xl md:text-5xl font-bold pt-10 animate-fade-in-zoom1">my journey with <br/><span className="text-2xl md:text-4xl">⋆˚࿔</span> Retailogists <span className="text-xl md:text-4xl">𝜗𝜚˚⋆</span></h1>
                <p className="px-4 md:w-3/4 text-justify place-self-center py-5">{intro}</p>
                <hr className="mx-4 border-brown opacity-20 md:mx-14"></hr>
                <div className="my-5 md:my-10 px-4 md:px-10">
                <h2 className="font-sub font-bold">about <span className="text-green">Retailogists</span></h2>
                <div className="bg-[#85a69b] bg-opacity-50 my-5 mb-0 p-6 md:p-14 rounded-[50px] shadow-md text-justify">
                    <p style={{ whiteSpace: "pre-line" }}>{retailogists}</p>
                </div>
                </div>
            </section>

            <section id="responsibilities" className="rounded-[50px] bg-matcha py-12">
                <div className="px-5 md:px-48">
                    <div className="md:py-4">
                        <h2 className="font-sub font-bold md:py-3"><span className="text-xl">✧˚ · .</span>my contribution as a full-stack developer<span className="text-xl">. ˚ ✧ .</span></h2>
                        <p style={{ whiteSpace: "pre-line" }} className="m-4 md:px-28">{job}</p>
                    </div>
                    <div className="rounded-[50px] bg-white bg-opacity-50 text-left p-7 md:px-14 md:py-8 m-2 md:w-3/4 place-self-center shadow-lg text-sm md:text-base">
                        <p className="font-bold mb-2">The technology and tools I leveraged in my role:</p>
                        <div className="pl-3">
                            <li><span className="font-bold">Mobile Dev:</span> Shopify, Liquid, JavaScript, Wix, Unbounce</li>
                            <li><span className="font-bold">App Dev:</span> TypeScript, Python, REST APIs</li>
                            <li><span className="font-bold">Backend & Data:</span> PostgreSQL, BigQuery, Google Cloud Platform, Shopify APIs</li>
                            <li><span className="font-bold">Tools:</span> Figma MCP, Calendly</li>
                        </div>
                    </div>
                </div>
                    <section className="w-full py-10 md:pt-20">
                        {/* <h3 className="font-bold">˙⋆✮ Project 1  </h3> */}
                        <h2 className="font-sub font-bold text-xl md:text-2xl text-forest p-2 px-4">˙⋆✮ Ecommerce Website Development</h2>
                        <div className="mt-5 px-5 text-left place-self-center pl-12 md:p-0 md:w-1/2 text-base md:text-lg">
                            {webDev.map((point, index) => (
                            <li key={index}>{point}</li>
                            ))}
                        </div>
                    </section>
                    <section className="w-full md:py-10">
                        {/* <h3 className="font-bold">˙⋆✮ Project 2  </h3> */}
                        <h2 className="font-sub font-bold text-xl md:text-2xl text-forest p-2 px-4">˙⋆✮ Retail Analytics Application Development</h2>
                        <div className="m-5 p-5 text-left place-self-center md:p-0 md:w-1/2 text-base md:text-lg">
                            <div className="pl-2">
                            {appDev.map((point, index) => (
                                <li key={index}>{point}</li>
                                ))}
                                </div>
                            </div>
                    </section>
            </section>

            <section id="goals" className="px-5 md:px-64 py-10 md:py-20">
                <h2 className="font-sub font-bold">☆ learning outcomes ☆</h2>
                <h3 className="font-text font-bold text-green pt-1 italic">Goals & Growth</h3>
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

                    <div className={`p-4 md:p-14 rounded-[50px] rounded-tl-none ${currentGoal.color} h-auto z-20 relative shadow-md align-middle`}>
                    <h2 className="font-sub font-bold text-base md:text-xl mb-3">{currentGoal.title}</h2>
                    <p style={{ whiteSpace: "pre-line" }} className="text-justify">{currentGoal.results}</p>
                    </div>
            </section>
            <section id="acknowledgement" className="py-8 px-9 md:px-64">
                {/* <h2 className="font-sub font-bold py-7">acknowledgement</h2> */}
                <p className="text-justify" style={{ whiteSpace: "pre-line" }}>{conclude}</p>
            </section>

        </div>
    );
};

export default Retail;