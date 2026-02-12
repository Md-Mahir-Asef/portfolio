import { useState } from "react";
import EmailCard from "../components/EmailCard";
import LinkedInCard from "../components/LinkedInCard";
import GitHubCard from "../components/GitHubCard";
import TwitterCard from "../components/TwitterCard";

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
                            <EmailCard
                                copiedStates={copiedStates}
                                copyToClipboard={copyToClipboard}
                            />
                            <LinkedInCard
                                copiedStates={copiedStates}
                                copyToClipboard={copyToClipboard}
                            />
                            <GitHubCard
                                copiedStates={copiedStates}
                                copyToClipboard={copyToClipboard}
                            />
                            <TwitterCard
                                copiedStates={copiedStates}
                                copyToClipboard={copyToClipboard}
                            />
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
