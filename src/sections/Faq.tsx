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
            question: "Can you work with an existing messy codebase?",
            answer: "Yes. Most real-world projects aren’t perfect — and that’s okay. <br/><br/>I start by auditing the codebase to understand structure, dependencies, and risk areas. Then I refactor incrementally while delivering features, so progress doesn’t stop. <br/><br/>My goal isn’t to rewrite everything — it’s to stabilize, clean, and improve without breaking what already works.",
        },
        {
            question: "How do you ensure performance and scalability?",
            answer: "I design systems with growth in mind from day one. <br/><br/>That means proper database design, optimized queries, caching where needed, and clean API structure. I also avoid over-engineering — you get a solution that fits your current scale but won’t collapse when traffic grows. <br/><br/>Performance isn’t an afterthought. It’s built into the architecture.",
        },
        {
            question: "What is your communication and update process?",
            answer: "Clear, structured, and predictable. <br/><br/> We define scope and milestones upfront. I provide regular updates, share progress demos when needed, and raise risks early instead of hiding them. <br/><br/>You’ll always know:",
            bulletPoints: [
                "What’s done",
                "What’s next",
                "If anything needs your input",
            ],
        },
        {
            question: "How do you handle deadlines?",
            answer: "I treat deadlines as commitments.<br/><br/>At the start of the project, we break the work into clear milestones with realistic timelines. I avoid overpromising and instead focus on predictable delivery.<br/><br/>You’ll receive regular progress updates, and if any risk appears, I communicate it early.",
        },
        {
            question: "How do you handle changes in project scope?",
            answer: "Changes are normal — growth often brings new ideas.<br/><br/>When scope changes, I first evaluate the impact on timeline and complexity. Then I clearly communicate what adjustments are needed (time, cost, or both) before moving forward.<br/><br/>Nothing moves without alignment.<br/><br/>This keeps the project structured and prevents confusion or hidden work.",
        },
        {
            question: "What happens after project delivery?",
            answer: "Delivery isn’t the end — it’s the transition phase.<br/><br/>After launch, I ensure everything is stable, properly documented, and easy for your team to maintain. If needed, I provide short-term post-launch support to handle bug fixes or adjustments.<br/><br/>If you require ongoing maintenance or feature expansion, we can define a structured support plan.",
        },
        {
            question: "Do you sign NDAs?",
            answer: "Yes. I fully respect confidentiality and intellectual property. <br/><br/>If your project requires an NDA, I’m comfortable signing one before reviewing sensitive details.",
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
            className="bg-gray-900 text-white py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12 xs:mb-16">
                    <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
                        Frequently Asked Questions
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-2 xs:space-x-4 mb-6 xs:mb-8">
                        <div className="w-12 xs:w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-2 xs:w-3 h-2 xs:h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-12 xs:w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-3 xs:space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group">
                            <div
                                className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl overflow-hidden scroll-reveal"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Animated gradient circle in top right corner */}
                                <div className="absolute -top-1 xs:-top-2 -right-1 xs:-right-2 w-4 xs:w-6 h-4 xs:h-6 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"></div>

                                {/* Question Header */}
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-4 xs:px-6 py-3 xs:py-4 text-left flex items-center justify-between hover:bg-[#2A2A2A] transition-all duration-200 group"
                                >
                                    <h3 className="text-base xs:text-lg font-semibold text-white pr-2 xs:pr-4">
                                        {item.question}
                                    </h3>
                                    <div
                                        className={`shrink-0 w-6 xs:w-8 h-6 xs:h-8 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                                            expandedItems.includes(index)
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    >
                                        <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                                    </div>
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        expandedItems.includes(index)
                                            ? "max-h-96 xs:max-h-96"
                                            : "max-h-0"
                                    }`}
                                >
                                    <div className="px-4 xs:px-6 pb-3 xs:pb-4 text-gray-300 leading-relaxed text-sm xs:text-base">
                                        <div
                                            className="mb-2 xs:mb-3"
                                            dangerouslySetInnerHTML={{
                                                __html: item.answer,
                                            }}
                                        />
                                        {item.bulletPoints && (
                                            <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2">
                                                {item.bulletPoints.map(
                                                    (point, pointIndex) => (
                                                        <li
                                                            key={pointIndex}
                                                            className="flex items-start"
                                                        >
                                                            <span className="text-blue-400 mr-1 xs:mr-2">
                                                                •
                                                            </span>
                                                            <span
                                                                className="text-xs xs:text-sm"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: point,
                                                                }}
                                                            />
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
                <div className="mt-8 xs:mt-12 text-center">
                    <p className="text-gray-400 text-base xs:text-lg">
                        Still have questions?
                    </p>
                    <p className="text-gray-500 text-sm xs:text-base mt-2">
                        Feel free to reach out through contact section below!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
