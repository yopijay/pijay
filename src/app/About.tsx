const About = () => {
    return (
        <section className="flex flex-col pt-40 lg:pt-60 px-10 sm:px-20 lg:px-40 items-center justify-center gap-y-4 transition-all ease-in-out">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-montserrat-thin text-[#F7F3E9]  transition-all ease-in-out">
                Hi! I am <span className="text-[#C8A882]">Pijay</span>
            </p>
            <p className="text-xl lg:text-2xl text-[#F7F3E9] font-montserrat-thin text-center transition-all ease-in-out">
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
