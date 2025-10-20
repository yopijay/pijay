const Experience = () => {
    const experiences = [
        {
            id: 1,
            position: "Frontend Web Developer",
            company: "Rising Tide Digital, Inc.",
            period: "Nov 2024 - July 2025",
            location: "Makati City, Philippines",
            description:
                "Specialized in transforming Figma designs into functional, reusable, and responsive web applications with pixel-perfect precision. Responsible for comprehensive unit testing of components to ensure code quality and reliability, while seamlessly integrating RESTful APIs to deliver dynamic user experiences.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
            achievements: [],
        },
        {
            id: 2,
            position: "Frontend Web Developer",
            company: "Stunner YPP Corporation",
            period: "Feb 2024 - July 2024",
            location: "Eastwood City, Philippines",
            description:
                "More focused on fixing minimal bugs and sometimes an errors. Also creating new product from scratch and adding additional feature for existing sites depends of what our client wants.",
            technologies: ["Playwright", "Next.js", "Bootstrap"],
            achievements: [],
        },
        {
            id: 3,
            position: "Fullstack Web Developer | IT Staff",
            company: "KC Electrical Innovation, Inc. ",
            period: "May 2022 - Feb 2024",
            location: "Quezon Ave, Philippines",
            description:
                "Developed an Inventory Management System for internal use of the company which also functions to determine the annual inventory count, accounting the actual inventory in stock. Do IT Staff stuff like fixing printer, refilling inks, configure LAN and Landline cables, setting up new computer and installing softwares.",
            technologies: [
                "React.js",
                "Material UI",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Restful API",
            ],
            achievements: [
                "Created an inventory and asset management system that will monitor all the assets and inventories of the company.",
            ],
        },
        {
            id: 4,
            position: "Frontend Web Developer",
            company: "Abrasoft Information Technology Solutions",
            period: "Sept 2021 - Mar 2022",
            location: "Remote",
            description:
                "Developed a crypto-exchange website, facilitating smooth transactions for trading and transferring crypto assets between crypto holders.",
            technologies: ["React.js", "Material UI", "Restful API"],
            achievements: [],
        },
        {
            id: 5,
            position: "Front-end Developer | Team Lead",
            company: "Aktus Global Management Inc.",
            period: "June 2019 - Sept 2021",
            location: "Taguig City, Philippines",
            description:
                "Enhance and made additions for some functionality of their Asset Management System. Part of the company's mobile app developer team for creating cross-platform Modular System. In charge of creating standard design frameworks for the company's future projects.",
            technologies: [
                "React.js",
                "Material UI",
                "Restful API",
                "Laravel",
                "Bootstrap",
                "PHP",
                "Saas/Scss",
                "Java",
            ],
            achievements: [
                "Led a team of 3 developers to successfully deliver front-end solutions for various projects, ensuring timely completion and adherence to quality standards.",
            ],
        },
    ];

    return (
        <section className="px-6 transition-all ease-in-out">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat-thin text-[#F7F3E9] text-center mb-16 transition-all ease-in-out">
                    My <span className="text-[#C8A882]">Experience</span>
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C8A882]/30"></div>

                    <div className="space-y-12">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="relative flex gap-8">
                                {/* Timeline Dot */}
                                <div className="hidden sm:block relative z-10">
                                    <div className="w-16 h-16 bg-[#C8A882] rounded-full flex items-center justify-center border-4 border-[#36454F]">
                                        <span className="text-[#36454F] font-montserrat-bold text-sm">
                                            {String(exp.id).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex flex-wrap items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-montserrat-bold text-[#C8A882] mb-1">
                                                {exp.position}
                                            </h3>
                                            <div className="text-[#F7F3E9] font-montserrat-bold text-lg">
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[#C8A882] font-montserrat-bold text-sm">
                                                {exp.period}
                                            </div>
                                            <div className="text-[#F7F3E9]/70 font-montserrat-light text-sm">
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-[#F7F3E9]/80 font-montserrat-light leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-montserrat-bold text-[#C8A882] mb-3">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-[#C8A882]/20 text-[#C8A882] text-sm rounded-full font-montserrat-bold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    {exp.achievements.length > 0 && <div>
                                        <h4 className="text-sm font-montserrat-bold text-[#C8A882] mb-3">
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map(
                                                (achievement, achIndex) => (
                                                    <li
                                                        key={achIndex}
                                                        className="flex items-start gap-3 text-[#F7F3E9]/80 font-montserrat-light text-sm"
                                                    >
                                                        <span className="text-[#C8A882] mt-1">
                                                            •
                                                        </span>
                                                        <span>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
