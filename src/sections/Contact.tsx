import { useState } from "react";
import { Mail, Linkedin, Github, Twitter, Copy, Check } from "lucide-react";

const Contact = () => {
    const [copiedStates, setCopiedStates] = useState<{
        [key: string]: boolean;
    }>({});

    const copyToClipboard = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedStates((prev) => ({ ...prev, [id]: true }));

            // Reset copied state after 2 seconds
            setTimeout(() => {
                setCopiedStates((prev) => ({ ...prev, [id]: false }));
            }, 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <section
            id="contact"
            className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-3 h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Contact Content */}
                <div className="flex flex-row items-center justify-center gap-12">
                    {/* Vertical Glowing Line with Balls */}
                    <div className="relative lg:order-1 order-2">
                        <div className="relative w-2 h-170 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto lg:mx-0">
                            {/* Glowing balls aligned with each contact card */}
                            {/* LinkedIn ball - 25% */}
                            <div
                                className="absolute top-[25%] -left-2 w-5 h-5 bg-linear-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                style={{ animationDelay: "0.3s" }}
                            ></div>
                            {/* GitHub ball - 50% */}
                            <div
                                className="absolute top-[50%] -left-2 w-6 h-6 bg-linear-to-r from-gray-600 to-gray-800 rounded-full shadow-lg shadow-gray-600/50 animate-grow-shrink"
                                style={{ animationDelay: "0.6s" }}
                            ></div>
                            {/* Twitter ball - 75% */}
                            <div
                                className="absolute top-[75%] -left-2 w-5 h-5 bg-linear-to-r from-blue-400 to-sky-500 rounded-full shadow-lg shadow-blue-400/50 animate-grow-shrink"
                                style={{ animationDelay: "0.9s" }}
                            ></div>
                            {/* Email ball - top */}
                            <div className="absolute top-0 -left-2 w-6 h-6 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex-1 lg:order-2 order-1 max-w-2xl">
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div
                                className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
                                style={{ animationDelay: "0s" }}
                            >
                                {/* Animated gradient circles at corners */}
                                <div className="absolute top-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                                <div
                                    className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.4s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.6s" }}
                                ></div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                            <Mail className="w-6 h-6 bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                Email
                                            </h3>
                                            <p className="text-gray-300 text-sm">
                                                mdmahirasef.dev@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a
                                            href="mailto:mdmahirasef.dev@gmail.com"
                                            className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                                        >
                                            Open
                                        </a>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    "mdmahirasef.dev@gmail.com",
                                                    "email",
                                                )
                                            }
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${copiedStates.email ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                                            title={
                                                copiedStates.email
                                                    ? "Copied!"
                                                    : "Copy link"
                                            }
                                        >
                                            {copiedStates.email ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 opacity-30"></div>
                            </div>

                            {/* LinkedIn Card */}
                            <div
                                className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
                                style={{ animationDelay: "0.1s" }}
                            >
                                {/* Animated gradient circles at corners */}
                                <div className="absolute top-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                                <div
                                    className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.4s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.6s" }}
                                ></div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                            <Linkedin className="w-6 h-6 bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                LinkedIn
                                            </h3>
                                            <p className="text-gray-300 text-sm">
                                                linkedin.com/in/md-mahir-asef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a
                                            href="https://linkedin.com/in/md-mahir-asef"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                                        >
                                            Open
                                        </a>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    "linkedin.com/in/md-mahir-asef",
                                                    "linkedin",
                                                )
                                            }
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${copiedStates.linkedin ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                                            title={
                                                copiedStates.linkedin
                                                    ? "Copied!"
                                                    : "Copy link"
                                            }
                                        >
                                            {copiedStates.linkedin ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 opacity-30"></div>
                            </div>

                            {/* GitHub Card */}
                            <div
                                className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
                                style={{ animationDelay: "0.2s" }}
                            >
                                {/* Animated gradient circles at corners */}
                                <div className="absolute top-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                                <div
                                    className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.4s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.6s" }}
                                ></div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                            <Github className="w-6 h-6 bg-linear-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                GitHub
                                            </h3>
                                            <p className="text-gray-300 text-sm">
                                                github.com/mdmahirasef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a
                                            href="https://github.com/mdmahirasef"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                                        >
                                            Open
                                        </a>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    "github.com/mdmahirasef",
                                                    "github",
                                                )
                                            }
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${copiedStates.github ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                                            title={
                                                copiedStates.github
                                                    ? "Copied!"
                                                    : "Copy link"
                                            }
                                        >
                                            {copiedStates.github ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 opacity-30"></div>
                            </div>

                            {/* Twitter Card */}
                            <div
                                className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
                                style={{ animationDelay: "0.3s" }}
                            >
                                {/* Animated gradient circles at corners */}
                                <div className="absolute top-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                                <div
                                    className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.4s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.6s" }}
                                ></div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                            <Twitter className="w-6 h-6 bg-linear-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                Twitter
                                            </h3>
                                            <p className="text-gray-300 text-sm">
                                                twitter.com/mdmahirasef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a
                                            href="https://twitter.com/mdmahirasef"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                                        >
                                            Open
                                        </a>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    "twitter.com/mdmahirasef",
                                                    "twitter",
                                                )
                                            }
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${copiedStates.twitter ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                                            title={
                                                copiedStates.twitter
                                                    ? "Copied!"
                                                    : "Copy link"
                                            }
                                        >
                                            {copiedStates.twitter ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 opacity-30"></div>
                            </div>
                        </div>

                        {/* Additional Message */}
                        <div className="mt-12 text-center">
                            <p className="text-gray-400 text-lg">
                                I'm always open to discussing new opportunities,
                                interesting projects, or just having a chat
                                about technology.
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                Feel free to reach out through any of the
                                platforms above!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
