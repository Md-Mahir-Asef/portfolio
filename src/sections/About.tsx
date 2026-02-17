import { useState, useEffect } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import ErrorBoundary from "../components/ErrorBoundary";

const TypingEffect = ({
    texts,
    speed = 100,
    eraseSpeed = 50,
    typingDelay = 500,
    eraseDelay = 2000,
}: {
    texts: string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
}) => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentText = texts[textIndex];

        if (isTyping) {
            if (charIndex < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + currentText[charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsTyping(false);
                }, eraseDelay);
                return () => clearTimeout(timeout);
            }
        } else {
            if (charIndex > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                }, eraseSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setTextIndex((prev) => (prev + 1) % texts.length);
                    setIsTyping(true);
                }, typingDelay);
                return () => clearTimeout(timeout);
            }
        }
    }, [
        charIndex,
        isTyping,
        textIndex,
        texts,
        speed,
        eraseSpeed,
        typingDelay,
        eraseDelay,
    ]);

    return (
        <span>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const About = () => {
    return (
        <section
            id="about"
            className="bg-gray-900 text-white py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div
                        className="space-y-4 xs:space-y-6 scroll-reveal"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold">
                            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                <ErrorBoundary
                                    fallback={<span>Full Stack Developer</span>}
                                >
                                    <TypingEffect
                                        texts={[
                                            "Full Stack Developer",
                                            "Backend Developer",
                                            "Software Engineer",
                                            "AI Engineer",
                                            "Web Developer",
                                            "Problem Solver",
                                        ]}
                                        speed={100}
                                        eraseSpeed={50}
                                        typingDelay={500}
                                        eraseDelay={2000}
                                    />
                                </ErrorBoundary>
                            </span>
                        </h2>

                        <div className="space-y-3 xs:space-y-4 text-gray-300 text-base xs:text-lg">
                            <p>
                                I'm a backend-focused full-stack engineer
                                passionate about building clean, maintainable,
                                and production-ready web applications. I
                                specialize in TypeScript, Node.js, and
                                PostgreSQL, creating efficient APIs and
                                designing scalable, secure database systems.
                                Every project I build balances performance with
                                long-term maintainability.
                            </p>

                            <p>
                                I approach development with strong computer
                                science fundamentals, including data structures,
                                algorithms, and system design. I focus on
                                real-world problem-solving and making trade-offs
                                that matter in production, ensuring code is not
                                just functional but robust and efficient.
                            </p>

                            <p>
                                My portfolio showcases projects that reflect
                                these principles. From backend-heavy
                                applications to full-stack systems, I strive to
                                ship solutions that are production-ready from
                                day one, continuously improving my skills and
                                delivering value with every line of code.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image and Social Icons */}
                    <div className="flex flex-col items-center space-y-4 xs:space-y-6">
                        {/* Image Container */}
                        <div
                            className="relative scroll-reveal"
                            style={{ animationDelay: "0.4s" }}
                        >
                            {/* Colorful glowing shadow */}
                            <div className="absolute -inset-2 xs:-inset-4 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-30 blur-xl animate-pulse"></div>
                            <div
                                className="absolute -inset-4 xs:-inset-8 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-lg opacity-20 blur-2xl animate-pulse"
                                style={{ animationDelay: "1s" }}
                            ></div>
                            <div
                                className="absolute -inset-6 xs:-inset-12 bg-linear-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg opacity-10 blur-3xl animate-pulse"
                                style={{ animationDelay: "2s" }}
                            ></div>

                            {/* Decorative border with dots */}
                            <div className="absolute -inset-0.5 xs:-inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-20"></div>
                            <div className="absolute -inset-px xs:-inset-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-10"></div>

                            {/* Animated corner dots */}
                            <div className="absolute -top-0.5 xs:-top-1 -left-0.5 xs:-left-1 w-2 h-2 xs:w-3 xs:h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                            <div
                                className="absolute -top-0.5 xs:-top-1 -right-0.5 xs:-right-1 w-2 h-2 xs:w-3 xs:h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                style={{ animationDelay: "0.3s" }}
                            ></div>
                            <div
                                className="absolute -bottom-0.5 xs:-bottom-1 -left-0.5 xs:-left-1 w-2 h-2 xs:w-3 xs:h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                style={{ animationDelay: "0.6s" }}
                            ></div>
                            <div
                                className="absolute -bottom-0.5 xs:-bottom-1 -right-0.5 xs:-right-1 w-2 h-2 xs:w-3 xs:h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                style={{ animationDelay: "0.9s" }}
                            ></div>

                            {/* Image */}
                            <div className="relative bg-gray-800 rounded-lg p-0.5 xs:p-1">
                                <img
                                    src="/images/profile.png"
                                    alt="Profile"
                                    className="w-48 h-48 xs:w-64 xs:h-64 md:w-80 md:h-80 object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3 xs:space-x-4 mt-6 xs:mt-10">
                            <a
                                href="mailto:mdmahirasef.dev@gmail.com"
                                className="w-10 h-10 xs:w-12 xs:h-12 bg-linear-to-r from-gray-900 to-black rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-white"
                            >
                                <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-mahir-asef-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 xs:w-12 xs:h-12 bg-linear-to-r from-gray-900 to-black rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-white"
                            >
                                <Linkedin className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                            </a>
                            <a
                                href="https://github.com/Md-Mahir-Asef"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 xs:w-12 xs:h-12 bg-linear-to-r from-gray-900 to-black rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-white"
                            >
                                <Github className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                            </a>
                            <a
                                href="https://x.com/MdMahirAsef"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 xs:w-12 xs:h-12 bg-linear-to-r from-gray-900 to-black rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-white"
                            >
                                <img
                                    src="/images/x-white.png"
                                    alt="X"
                                    className="w-4 h-4 xs:w-5 xs:h-5 text-white"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
