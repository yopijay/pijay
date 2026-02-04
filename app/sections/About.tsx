const About = () => {
    return (
        <div className="flex flex-col gap-y-7 text-[#a47551] tracking-tight">
            <p className="text-md font-bold">ABOUT</p>
            <div className="flex flex-col gap-y-4">
                <p>
                    {`I'm a frontend developer with a strong focus on web development. `}{" "}
                    <span className="text-[#4b2e2dbd] font-semibold">
                        My expertise lies in creating reusable and functional
                        components based on client-provided designs
                    </span>{" "}
                    {`, such as Figma or any other format-ensuring I deliver pixel-perfect, user-friendly interfaces without being 
            involved in the design phase.`}
                </p>
                <p>
                    <span className="text-[#4b2e2dbd] font-semibold">
                        Currently
                    </span>
                    {`, I'm a freelancer working on both dynamic and static websites, Beyond frontend development, I also handle database creation
            and API development independently to ensure seamless functionality for my projects.`}
                </p>
                <p>
                    <span className="text-[#4b2e2dbd] font-semibold">
                        Previously
                    </span>
                    {`, I was part of a collaborative team as a frontend developer. My primary responsibilities included transalting clients' Figma designs
            into fully functional web interfaces and implementing APIs to enhance interactivity. I also contributed to building core components,
            like reusable fields and calendars, to streamline workflow efficiency.`}
                </p>
                <p>
                    <span className="text-[#4b2e2dbd] font-semibold">
                        Beyond work
                    </span>
                    {`, I'm passionate about cheerleading. During my free time, I dedicate myself to training and often compete alongside my
            team in cheer competitions. It's a sport that fuels my creativity and teamwork skills, both of which I bring into my professional work.`}
                </p>
            </div>
        </div>
    );
};

export default About;
