import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Works from "./Works";

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-y-10">
            <About />
            <Works />
            <Experience />
            <Contact />
        </div>
    );
}
