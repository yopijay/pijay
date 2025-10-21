const Contact = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat-thin text-[#F7F3E9] text-center mb-16 transition-all ease-in-out">
                    {"Let's"} <span className="text-[#C8A882]">Connect</span>
                </h2>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* About Column */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[#C8A882] to-[#C8A882]/80 rounded-2xl p-8">
                            <h3 className="text-2xl font-montserrat-bold text-[#36454F] mb-4">
                                About Me
                            </h3>
                            <div className="space-y-4 text-[#36454F] font-montserrat-light">
                                <p className="leading-relaxed">
                                    With{" "}
                                    {/* <span className="font-montserrat-bold">
                                        {yearsOfExperience}+ years
                                    </span>{" "} */}
                                    in frontend development, I specialize in
                                    transforming Figma designs into
                                    pixel-perfect web experiences.
                                </p>
                                <p className="leading-relaxed">
                                    <span className="font-montserrat-bold">
                                        Currently:
                                    </span>{" "}
                                    Expanding my skills with React Native for
                                    Android development.
                                </p>
                                <p className="leading-relaxed">
                                    <span className="font-montserrat-bold">
                                        Working on:
                                    </span>{" "}
                                    A church attendance monitoring app to help
                                    our community stay connected.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <h4 className="text-lg font-montserrat-bold text-[#C8A882] mb-4">
                                Current Focus
                            </h4>
                            <div className="space-y-3 text-sm font-montserrat-light text-[#F7F3E9]">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">📱</span>
                                    <span>
                                        Learning React Native for mobile
                                        development
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">⛪</span>
                                    <span>
                                        Building church attendance monitoring
                                        app
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🎨</span>
                                    <span>
                                        Transforming Figma designs to code
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Column */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-montserrat-bold text-[#C8A882] mb-6">
                                Get In Touch
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    className="flex items-center gap-4 p-4 border border-[#C8A882] text-[#C8A882] rounded-lg hover:bg-[#C8A882] hover:text-[#36454F] transition-colors group"
                                >
                                    <span className="text-2xl">💼</span>
                                    <div className="flex-1">
                                        <div className="font-montserrat-bold">
                                            LinkedIn
                                        </div>
                                        <div className="text-sm opacity-80">
                                            Professional network
                                        </div>
                                    </div>
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                                <a
                                    href="https://github.com/yourusername"
                                    className="flex items-center gap-4 p-4 border border-[#C8A882] text-[#C8A882] rounded-lg hover:bg-[#C8A882] hover:text-[#36454F] transition-colors group"
                                >
                                    <span className="text-2xl">🔗</span>
                                    <div className="flex-1">
                                        <div className="font-montserrat-bold">
                                            GitHub
                                        </div>
                                        <div className="text-sm opacity-80">
                                            Check out my code
                                        </div>
                                    </div>
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <h4 className="text-lg font-montserrat-bold text-[#C8A882] mb-4">
                                Availability
                            </h4>
                            <div className="space-y-3 text-sm font-montserrat-light text-[#F7F3E9]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span>Available for new projects</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <span>Response time: 24 hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span>Timezone: Philippines (GMT+8)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
