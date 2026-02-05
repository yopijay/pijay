import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const PrimaryInfo = () => {
    const socialLinks = [
        {
            icon: faGithub,
            link: "https://github.com/yopijay",
            alt: "Github",
        },
        {
            icon: faFacebook,
            link: "https://www.facebook.com/yopijay",
            alt: "Facebook",
        },
        {
            icon: faInstagram,
            link: "https://www.instagram.com/pijaayyyy__/",
            alt: "Instagram",
        },
        {
            icon: faYoutube,
            link: "https://www.youtube.com/@pijay8957",
            alt: "Youtube",
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/paul-john-judan-0060a41b9/",
            alt: "Linkedin",
        },
    ];
    return (
        <div className="flex flex-col pt-12 px-4 sm:px-10 sm:pt-24 gap-y-6 w-full lg:w-5/12 lg:h-screen lg:justify-between lg:pb-12">
            <div className="flex flex-col gap-y-2 max-w-106.25">
                <p className="text-[#4b2e2d] font-bold text-4xl font-playfair tracking-tighter">
                    Paul John Judan
                </p>
                <p className="text-[#a47551] tracking-tight font-bold">
                    Frontend Web Developer
                </p>
                <p className="text-[#a47551] tracking-tight">
                    Professional Frontend Developer specializing in React,
                    Next.js, TypeScript, and modern web technologies.
                </p>
            </div>
            <div className="flex flex-row gap-3">
                {socialLinks.map((socials, index) => (
                    <Link
                        key={index}
                        target="_blank"
                        href={socials.link}
                        className="text-[#a47551] hover:text-[#4b2e2d] transition-colors duration-200"
                    >
                        <FontAwesomeIcon
                            icon={socials.icon}
                            className="w-6 h-6"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PrimaryInfo;
