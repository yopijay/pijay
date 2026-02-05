import Link from "next/link";

import Portfolio from "@public/projects/portfolio.png";
import QCACACE from "@public/projects/qcacace.png";
import EWedding from "@public/projects/e-wedding.png";
import AMS from "@public/projects/asset-management.png";
import SPower from "@public/projects/s-power.png";
import Image from "next/image";

const Projects = () => {
    const projects = [
        {
            name: "My Portfolio",
            description: "A showcase of my work and projects.",
            demo: "https://pijay.vercel.app/",
            techstack: ["NextJS", "TypeScript", "Tailwind CSS"],
            screenshot: Portfolio,
        },
        {
            name: "Quezon City Animal Care & Adoption Center",
            description: `Web application that provides services that makes adoption, surrendering, and reporting missing animals easier. It also 
                provides information about Quezon City Animals including latest announcements to keep you updated. Here in QCACAC, we offer 
                love and care to the animals.`,
            demo: "https://qcacace.vercel.app/",
            techstack: [
                "ReactJS",
                "MaterialUI",
                "NodeJS",
                "ExpressJS",
                "PostgreSQL",
                "RESTful APIs",
            ],
            screenshot: QCACACE,
        },
        {
            name: "Wedding E-Invitation",
            description: `E-invitation site for my own wedding. Planning to add RSVP functionality for future use.`,
            demo: "https://paul-hazel.vercel.app/",
            techstack: ["ReactJS", "MaterialUI"],
            screenshot: EWedding,
        },
        {
            name: "Inventory & Asset Management System",
            description: `A web application for internal use of the company. Used for tracking the remaining stocks of the product they are 
                selling.`,
            demo: "https://kenneth-commercial.vercel.app/",
            techstack: [
                "ReactJS",
                "MaterialUI",
                "NodeJS",
                "ExpressJS",
                "PostgreSQL",
                "RESTful APIs",
            ],
            screenshot: AMS,
        },
        {
            name: "S-Power",
            description: `My web design proposal for S-power corporation. This site is only for viewing of their products and also a way 
                to contact the company for other services they can offer.`,
            demo: "https://s-power.vercel.app/",
            techstack: ["ReactJS", "MaterialUI"],
            screenshot: SPower,
        },
    ];
    return (
        <div className="flex flex-col gap-y-7 text-[#a47551] tracking-tight">
            <p className="text-md font-bold">PROJECTS</p>
            <div className="flex flex-col gap-y-7">
                {projects.map((project, index) => (
                    <div
                        className="flex flex-col gap-y-2 lg:hover:bg-[#4b2e2d13] lg:p-4 lg:rounded-md lg:transition-colors lg:duration-300"
                        key={index}
                    >
                        <Link
                            target="_blank"
                            href={project.demo}
                            className="text-[#4b2e2d] font-semibold hover:text-[#4b2e2da4]"
                        >
                            {project.name}
                        </Link>
                        <p className="text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <Image
                            src={project.screenshot}
                            alt={project.name}
                            className="rounded-md shadow-xl w-6/12 my-2"
                        />
                        <div className="flex flex-row flex-wrap gap-2">
                            {project.techstack.map((tech, techIndex) => (
                                <p
                                    key={techIndex}
                                    className="bg-[#4b2e2d98] text-[#dcc7b6] px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap"
                                >
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

export default Projects;
