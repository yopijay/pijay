const Experience = () => {
    const experiences = [
        {
            company: "Rising Tide Digital, Inc.",
            role: "Frontend Developer",
            duration: "Nov 2024 - Jul 2025",
            description: `Specialized in transforming Figma designs into functional, reusable and responsive web applications with pixel-perfect precision. 
                Responsible for comprehensive unit testing of components to ensure code quality and reliability, while seamlessly integrating RESTful APIs 
                to deliver dynamic user experiences.`,
            techstack: ["NextJS", "TypeScript", "Tailwind CSS", "RESTful APIs"],
        },
        {
            company: "Stunner YPP Co.",
            role: "Frontend Developer",
            duration: "Feb 2024 - Jul 2024",
            description: `More focused on fixing minimal bugs and sometimes an errors. Also creating new product from scratch and adding features for 
                existing sites depends of what our clients wants.`,
            techstack: ["NextJS", "TypeScript", "Bootstrap", "Playwright"],
        },
        {
            company: "KC Electrical Innovation, Inc.",
            role: "Fullstack Developer | IT Staff",
            duration: "May 2022 - Feb 2024",
            description: `Developed an Inventory Management System for internal use of the company which also functions to determine the annual 
                inventory count, account that actual inventory in stock. Do IT stuff like fixing printers, refilling inks, configure LAN and landline cables, 
                setting up new computer and installing software.`,
            techstack: [
                "ReactJS",
                "Material UI",
                "PostgreSQL",
                "RESTful APIs",
                "NodeJS",
            ],
        },
        {
            company: "Abrasoft Information Technology",
            role: "Frontend Developer",
            duration: "Sep 2021 - Mar 2022",
            description: `Develop a crypto-exchange websites, facilitating smooth transactions for trading and transferring crypto assets between crypto holders.`,
            techstack: ["ReactJS", "Material UI", "RESTful APIs"],
        },
        {
            company: "Aktus Global Management, Inc.",
            role: "Frontend Developer | Team Lead",
            duration: "Jun 2019 - Sep 2021",
            description: `Enhance and made additions for some functionality of their Asset Management System. Part of the company's mobile app develpment 
                team for creating cross-platform modular system. In charge of creating standard design frameworks for the company's future projects.`,
            techstack: [
                "ReactJS",
                "Material UI",
                "PostgreSQL",
                "RESTful APIs",
                "NodeJS",
                "Laravel",
                "Java",
                "Bootstrap",
            ],
        },
    ];
    return (
        <div className="flex flex-col gap-y-7 text-[#a47551] tracking-tight">
            <p className="text-md font-bold">EXPERIENCE</p>
            <div className="flex flex-col gap-y-7">
                {experiences.map((exp, index) => (
                    <div className="flex flex-col gap-y-1" key={index}>
                        <p className="text-sm text-[#4b2e2da4] font-semibold">
                            {exp.duration}
                        </p>
                        <p className="text-[#4b2e2d] font-bold text-lg leading-5.5">
                            {exp.company} - {exp.role}
                        </p>
                        <p>{exp.description}</p>
                        <div className="flex flex-row flex-wrap gap-2">
                            {exp.techstack.map((tech, techIndex) => (
                                <p key={techIndex} className="bg-[#4b2e2d98] text-[#dcc7b6] px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
