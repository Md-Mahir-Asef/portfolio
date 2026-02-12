import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const faqData = [
        {
            question: "How do you approach a new project?",
            answer: "I start with clarity, define constraints, design for scale, then execute in iterations. <br />Here’s the breakdown:",
            bulletPoints: [
                "<b>Requirement Deep Dive –</b> I clarify business goals, user flows, edge cases, and constraints (budget, timeline, scalability expectations). No assumptions.",
                "<b>System Design First –</b> I outline architecture, database schema, API contracts, and security strategy before writing real code.",
                "<b>Incremental Execution –</b> I build in small, testable modules with clean commits and version control discipline.",
                "<b>Performance & Security Mindset –</b> Input validation, indexing strategy, proper auth, and scalability considerations are built-in — not afterthoughts.",
                "<b>Feedback Loop –</b> I ship early iterations, gather feedback, refine fast.",
            ],
        },
        {
            question: "Do you work with existing messy codebases?",
            answer: "You can reach me through multiple channels: email at mdmahirasef.dev@gmail.com, LinkedIn at linkedin.com/in/md-mahir-asef-dev, GitHub at github.com/Md-Mahir-Asef, or Twitter/X at @MdMahirAsef. I'm always open to discussing new opportunities and collaborations.",
        },
        {
            question: "Do you work on freelance projects?",
            answer: "Yes, I'm available for freelance projects and consulting work. I particularly enjoy projects that involve complex backend systems, API design, database architecture, or full-stack applications. Feel free to reach out with your project details.",
            bulletPoints: [
                "Backend system development and optimization",
                "API design and implementation",
                "Database architecture and scaling",
                "Full-stack application development",
                "Technical consulting and code reviews",
            ],
        },
        {
            question: "What's your typical development process?",
            answer: "My development process emphasizes quality, maintainability, and production readiness. I believe in building robust solutions that stand the test of time.",
        },
        {
            question:
                "Can you help with both frontend and backend development?",
            answer: "Absolutely! While I'm backend-focused, I'm a full-stack developer comfortable with both frontend and backend technologies. I can handle everything from database design and API development to responsive frontend interfaces and deployment strategies.",
            bulletPoints: [
                "Frontend: React, Vue.js, TypeScript, responsive design",
                "Backend: Node.js, Express, PostgreSQL, MongoDB",
                "DevOps: Docker, CI/CD, cloud deployment",
                "Integration: RESTful APIs, GraphQL, WebSocket connections",
            ],
        },
        {
            question: "How do you approach learning new technologies?",
            answer: "I approach learning through hands-on projects and practical application. I focus on understanding fundamental concepts before diving into specific frameworks. I believe in continuous learning and staying updated with industry trends while maintaining strong computer science fundamentals.",
        },
        {
            question: "What makes you different from other developers?",
            answer: "I combine strong computer science fundamentals with practical production experience. I focus on building maintainable, scalable solutions rather than just functional code. I understand system design, database architecture, and the importance of writing code that lasts in production environments.",
            bulletPoints: [
                "Deep understanding of data structures and algorithms",
                "Production-focused development approach",
                "Emphasis on code maintainability and scalability",
                "Strong system design and architecture skills",
                "Commitment to writing documentation and tests",
            ],
        },
    ];

    const toggleItem = (index: number) => {
        setExpandedItems((prev) =>
            prev.includes(index)
                ? prev.filter((item) => item !== index)
                : [...prev, index],
        );
    };

    return (
        <section
            id="faq"
            className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-3 h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group">
                            <div
                                className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl overflow-hidden scroll-reveal"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Animated gradient circle in top right corner */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"></div>

                                {/* Question Header */}
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#2A2A2A] transition-all duration-200 group"
                                >
                                    <h3 className="text-lg font-semibold text-white pr-4">
                                        {item.question}
                                    </h3>
                                    <div
                                        className={`shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                                            expandedItems.includes(index)
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    >
                                        <ChevronDown className="w-5 h-5 text-white" />
                                    </div>
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        expandedItems.includes(index)
                                            ? "max-h-96"
                                            : "max-h-0"
                                    }`}
                                >
                                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                                        <p className="mb-3">{item.answer}</p>
                                        {item.bulletPoints && (
                                            <ul className="list-disc list-inside space-y-2 ml-2">
                                                {item.bulletPoints.map(
                                                    (point, pointIndex) => (
                                                        <li
                                                            key={pointIndex}
                                                            className="flex items-start"
                                                        >
                                                            <span className="text-blue-400 mr-2">
                                                                •
                                                            </span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Message */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-lg">
                        Still have questions?
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Feel free to reach out through the contact section
                        below!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
