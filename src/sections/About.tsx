import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

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
        <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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
                            </span>
                        </h2>

                        <div className="space-y-4 text-gray-300 text-lg">
                            <p>
                                I am a passionate full-stack developer with
                                expertise in building modern web applications. I
                                love turning complex problems into simple,
                                beautiful, and intuitive solutions.
                            </p>

                            <p>
                                With a strong foundation in both frontend and
                                backend technologies, I create seamless user
                                experiences backed by robust and scalable
                                architectures. My goal is to bridge the gap
                                between design and functionality.
                            </p>

                            <p>
                                I am constantly learning and exploring new
                                technologies to stay updated with the latest
                                trends in web development. When I'm not coding,
                                you can find me contributing to open-source
                                projects or sharing my knowledge with the
                                developer community.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image and Social Icons */}
                    <div className="flex flex-col items-center space-y-6">
                        {/* Image Container */}
                        <div className="relative">
                            {/* Decorative border with dots */}
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-20"></div>
                            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-10"></div>

                            {/* Corner dots */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-500 rounded-full"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>

                            {/* Image */}
                            <div className="relative bg-gray-800 rounded-lg p-1">
                                <img
                                    src="/images/profile.png"
                                    alt="Profile"
                                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a
                                href="mailto:mdmahirasef.dev@gmail.com"
                                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
                            >
                                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a
                                href="https://linkedin.com/in/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
                            >
                                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
                            >
                                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a
                                href="https://twitter.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
                            >
                                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
