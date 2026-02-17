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
            className="bg-gray-900 text-white py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12 xs:mb-16">
                    <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
                        Contact
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-2 xs:space-x-4 mb-6 xs:mb-8">
                        <div className="w-12 xs:w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-2 xs:w-3 h-2 xs:h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-12 xs:w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Contact Content - Mobile First Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xs:gap-12">
                    {/* Decorative Vertical Line - Only visible on larger screens */}
                    <div className="hidden lg:flex relative order-1 lg:order-1">
                        <div className="relative w-2 h-175 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
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
                    <div className="w-full max-w-2xl order-2 lg:order-2">
                        <div className="space-y-4 xs:space-y-6">
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
                        <div className="mt-8 xs:mt-12 text-center">
                            <p className="text-gray-400 text-base xs:text-lg">
                                I'm always open to discussing new opportunities,
                                interesting projects, or just having a chat
                                about technology.
                            </p>
                            <p className="text-gray-500 text-sm xs:text-base mt-2">
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
