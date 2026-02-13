import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
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

    const handleNavigation = (href: string) => {
        if (href.startsWith("#")) {
            // Navigate to home page first, then scroll to section
            window.location.href = "/" + href;
        } else {
            // Handle external links or other routes
            window.location.href = href;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const services = [
        "TypeScript/Node.js Backend Development",
        "Full-Stack Web Development (React + Node.js)",
        "REST API Development & Integration",
        "Database Design & Optimization",
        "Freelance Contract Project Consulting",
        "Bug Fixing & Code Refactoring Services",
        "Open Source Contributions & Automation Scripts",
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#333333]">
            <div className="max-w-7xl mx-auto">
                {/* Three Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: Personal Branding */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Md. Mahir Asef
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I’m always excited to take on new opportunities,
                            collaborate on innovative projects, or just have a
                            meaningful conversation about technology. Whether
                            it’s building scalable applications, solving complex
                            backend challenges, or exploring creative full-stack
                            solutions, I’m ready to bring ideas to life. Feel
                            free to reach out—I’m just a message away and eager
                            to connect with like-minded professionals to create
                            something impactful together.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3 pt-2">
                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        "mdmahirasef.dev@gmail.com",
                                        "email",
                                    )
                                }
                                className="w-10 h-10 bg-linear-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-gray-600"
                                title="Copy Email"
                            >
                                <Mail className="w-4 h-4 text-white" />
                            </button>
                            <a
                                href="https://www.linkedin.com/in/md-mahir-asef-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-linear-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-gray-600"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://github.com/Md-Mahir-Asef"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-linear-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-gray-600"
                                title="GitHub"
                            >
                                <Github className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://x.com/MdMahirAsef"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-linear-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-gray-600"
                                title="X/Twitter"
                            >
                                <img
                                    src="/images/x-white.png"
                                    alt="X"
                                    className="w-4 h-4 text-white"
                                />
                            </a>
                        </div>

                        {/* Copy feedback */}
                        {copiedStates.email && (
                            <p className="text-green-400 text-xs animate-pulse">
                                Email copied to clipboard!
                            </p>
                        )}
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li
                                    key={index}
                                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-start"
                                >
                                    <span className="text-blue-400 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            handleNavigation(link.href)
                                        }
                                        className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform duration-200">
                                            ›
                                        </span>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#333333] pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm">
                            © 2025 Md Mahir Asef. All rights reserved.
                        </p>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group"
                        >
                            <span className="text-sm font-medium">
                                Back to Top
                            </span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Decorative Gradient Element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink opacity-30"></div>
            </div>
        </footer>
    );
};

export default Footer;
