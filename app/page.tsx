import About from "./sections/About";
import Credits from "./sections/Credits";
import Experience from "./sections/Experience";
import PrimaryInfo from "./sections/PrimaryInfo";
import Projects from "./sections/Projects";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col lg:flex-row gap-y-20 max-w-5xl mx-auto">
            <PrimaryInfo />
            <div className="flex flex-col gap-y-20 px-4 sm:px-10 sm:pt-24 pb-12 w-full lg:w-7/12 lg:overflow-y-scroll lg:h-screen lg:[&::-webkit-scrollbar]:hidden">
                <About />
                <Experience />
                <Projects />
                <Credits />
            </div>
        </div>
    );
}
