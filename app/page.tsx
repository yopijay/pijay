/* eslint-disable react-hooks/purity */
import About from "./sections/About";
import Credits from "./sections/Credits";
import Experience from "./sections/Experience";
import PrimaryInfo from "./sections/PrimaryInfo";
import Projects from "./sections/Projects";

export default function Home() {
    return (
        <>
            <div className="flex min-h-screen flex-col lg:flex-row gap-y-20 max-w-5xl mx-auto">
                <PrimaryInfo />
                <div className="flex flex-col gap-y-20 px-4 sm:px-10 sm:pt-24 pb-12 w-full lg:w-7/12 lg:overflow-y-scroll lg:h-screen lg:[&::-webkit-scrollbar]:hidden">
                    <About />
                    <Experience />
                    <Projects />
                    <Credits />
                </div>
            </div>
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, index) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        key={index}
                        style={{
                            backgroundColor: "#4b2e2d",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${8 + Math.random() * 12}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}
