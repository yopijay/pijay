"use client";

import Wedding from "@/assets/images/e-wedding-invitation.png";
import KennethCommercial from "@/assets/images/kenneth-commercial.png";
import Portfolio from "@/assets/images/portfolio.png";
import QCACACE from "@/assets/images/qcacace.png";
import SPower from "@/assets/images/s-power.png";
import Image from "next/image";

const Works = () => {
    const yearsOfExperience = new Date().getFullYear() - 2019;
    const projects = [
        {
            id: 1,
            title: "My Portfolio",
            description: "A showcase of my work and projects.",
            image: Portfolio,
            technologies: ["Next", "TypeScript", "Tailwind CSS"],
            liveURL: "https://pijay.vercel.app/",
            githubURL: "https://github.com/yopijay/pijay",
        },
        {
            id: 2,
            title: "Inventory & Asset Management System",
            description:
                "A web application for internal use of the compan. Used for tracking the remaining stocks of the product they are selling.",
            image: KennethCommercial,
            technologies: [
                "React",
                "Material UI",
                "Node",
                "Express",
                "PostgreSQL",
                "Restful API",
            ],
            liveURL: "https://kenneth-commercial.vercel.app/",
        },
        {
            id: 3,
            title: "Quezon City Animal Care & Adoption Center",
            description:
                "Web application that provides services that makes adoption, surrendering, and reporting missing animals easier. It also provides information about Quezon City Animals including latest announcements to keep you updated. Here in QC ACAC, we offer love and care to the animals!",
            image: QCACACE,
            technologies: [
                "React",
                "Material UI",
                "Node",
                "Express",
                "PostgreSQL",
                "Restful API",
            ],
            liveURL: "https://qcacace.vercel.app/",
            githubURL: "https://github.com/yopijay/qcacace",
        },
        {
            id: 4,
            title: "S-Power",
            description:
                "My web design proporal for S-power Corporation. This site is only for viewing of their products and also a way to contact the company for other services they can offer.",
            image: SPower,
            technologies: ["React", "Material UI"],
            liveURL: "https://s-power.vercel.app/",
            githubURL: "https://github.com/yopijay/s-power",
        },
        {
            id: 5,
            title: "Wedding E-Invitation",
            description:
                "E-invitation site for my own wedding! Planning to add RSVP functionality for future use.",
            image: Wedding,
            technologies: ["React", "Material UI"],
            liveURL: "https://paul-hazel.vercel.app/",
            githubURL: "https://github.com/yopijay/rsvp",
        },
    ];
    return (
        <section className="py-20 px-6 transition-all ease-in-out">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#F7F3E9] text-center mb-12 font-montserrat-thin transition-all ease-in-out">
                    My <span className="text-[#C8A882]">Works</span>
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 transition-all ease-in-out">
                    {/* Image-First Project Card */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="break-inside-avoid mb-6 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                                <Image
                                    alt={project.title}
                                    src={project.image}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="w-8 h-8 bg-[#C8A882] rounded-lg flex items-center justify-center">
                                        <span className="text-[#36454F] font-montserrat-bold text-xs">
                                            {String(project.id).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-[#C8A882] font-montserrat-bold text-lg mb-3 leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-[#F7F3E9] text-sm mb-4 leading-relaxed font-montserrat-thin">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-[#C8A882]/20 text-[#C8A882] text-xs rounded font-montserrat-bold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#C8A882] hover:text-[#F7F3E9] text-sm font-montserrat-bold transition-colors"
                                    >
                                        Live Demo →
                                    </a>
                                    {project.githubURL && (
                                        <a
                                            href={project.githubURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#C8A882] hover:text-[#F7F3E9] text-sm font-montserrat-bold transition-colors"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Stats/Info Card */}
                    <div className="break-inside-avoid mb-6 bg-gradient-to-br from-[#C8A882] to-[#C8A882]/80 rounded-2xl p-6">
                        <h3 className="text-xl font-montserrat-bold text-[#36454F] mb-3">
                            🎯 My Approach
                        </h3>
                        <p className="text-[#36454F] text-sm leading-relaxed font-montserrat-light">
                            I specialize in transforming Figma designs into
                            pixel-perfect, responsive websites. Every project is
                            built with attention to detail and modern best
                            practices.
                        </p>
                    </div>

                    {/* Numbers Card */}
                    <div className="break-inside-avoid mb-6 bg-white/5 backdrop-blur-sm border border-[#C8A882]/20 rounded-2xl p-6">
                        <h3 className="text-lg font-montserrat-bold text-[#C8A882] mb-4">
                            By the Numbers
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-[#F7F3E9]/70 text-sm font-montserrat-light">
                                    Years Experience
                                </span>
                                <span className="text-[#C8A882]  font-montserrat-bold">
                                    {yearsOfExperience}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#F7F3E9]/70 text-sm font-montserrat-light">
                                    Technologies
                                </span>
                                <span className="text-[#C8A882]  font-montserrat-bold">
                                    10+
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Life Verse Card */}
                    <div className="break-inside-avoid mb-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="text-4xl text-[#C8A882] mb-3">
                            &quot;
                        </div>
                        <p className="text-[#F7F3E9]/80 text-sm leading-relaxed mb-4  font-montserrat-light">
                            Trust in the Lord with all your heart; do not depend
                            on your own understanding. Seek his will in all you
                            do, and he will show you which path to take.
                        </p>
                        <div className="text-[#C8A882] text-sm  font-montserrat-medium">
                            - Proverbs 3:5-6 NLT
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
