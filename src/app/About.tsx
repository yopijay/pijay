const About = () => {
    return (
        <section className="flex flex-col py-60 px-40 items-center justify-center gap-y-4">
            <p className="text-5xl font-montserrat-thin text-[#F7F3E9]">
                Hi! I am <span className="text-[#C8A882]">Pijay</span>
            </p>
            <p className="text-2xl text-[#F7F3E9] font-montserrat-thin text-center">
                A <span className="text-[#C8A882]">Frontend Developer</span> who
                turns your Figma masterpieces into pixel-perfect websites.{" "}
                <span className="text-[#C8A882]">
                    Warning: May stare blankly if asked to design from scratch!
                </span>
            </p>
        </section>
    );
};

export default About;
