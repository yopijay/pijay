import Link from "next/link";

const Credits = () => {
    return (
        <div className="text-[#a47551] text-sm leading-relaxed">
            <p>
                Design inspired by{" "}
                <Link
                    href="https://brittanychiang.com"
                    target="_blank"
                    className="text-[#4b2e2da4] font-medium hover:underline"
                >
                    brittanychiang.com
                </Link>
            </p>
            <p>
                Coded in{" "}
                <span className="text-[#4b2e2da4] font-medium">
                    Visual Studio Code
                </span>{" "}
                by yours truly. Built with{" "}
                <span className="text-[#4b2e2da4] font-medium">Next.js</span>{" "}
                and{" "}
                <span className="text-[#4b2e2da4] font-medium">
                    Tailwind CSS
                </span>
                , deployed with{" "}
                <span className="text-[#4b2e2da4] font-medium">Vercel</span>.
            </p>
        </div>
    );
};

export default Credits;
