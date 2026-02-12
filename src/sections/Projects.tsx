import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "E-commerce App",
            period: "January 2026 - February 2026",
            description: [
                "Built a full-featured e-commerce platform with product catalog and cart system",
                "Implemented secure user authentication, payment integration, and order tracking",
                "Optimized backend for performance and scalability with PostgreSQL and Node.js",
            ],
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "JWT",
                "PostgreSQL",
                "Prisma",
            ],
            hasLiveDemo: true,
            hasCode: true,
        },
        {
            title: "KV Link Manager",
            period: "November 2025 - December 2025",
            description: [
                "Developed a frontend-only key-value link management system to store and organize links efficiently",
                "Implemented search, filtering, and tagging functionality entirely on the client side",
                "Provided a responsive and interactive UI for quick link access and management",
            ],
            technologies: [
                "React",
                "Vite",
                "Shadcn UI",
                "LocalStorage",
                "Tailwind CSS",
            ],
            hasLiveDemo: true,
            hasCode: true,
        },
        {
            title: "To-do App",
            period: "September 2025 - October 2025",
            description: [
                "Created a task management application with user-friendly UI for adding and tracking tasks",
                "Implemented task prioritization, deadlines, and real-time updates",
                "Added user authentication and personalized task views",
            ],
            technologies: ["React.js", "Node.js", "PostgreSQL"],
            hasLiveDemo: true,
            hasCode: true,
        },
    ];

    return (
        <section
            id="projects"
            className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Projects
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-3 h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            {/* Card Container */}
                            <div
                                className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 flex flex-col h-full scroll-reveal"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Animated gradient circle in top right corner */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"></div>

                                {/* Project Title and Period */}
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {project.period}
                                </p>

                                {/* Project Description */}
                                <ul className="list-disc list-inside text-gray-300 mb-4 grow">
                                    {project.description.map(
                                        (item, descIndex) => (
                                            <li
                                                key={descIndex}
                                                className="mb-1 flex items-start"
                                            >
                                                <span className="text-blue-400 mr-2">
                                                    •
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-[#2A2A2A] text-gray-300 text-xs rounded-full border border-[#444444]"
                                            >
                                                {tech}
                                            </span>
                                        ),
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto justify-between">
                                    {project.hasCode && (
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">
                                                View Code
                                            </span>
                                        </a>
                                    )}
                                    {project.hasLiveDemo && (
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span className="text-sm">
                                                Live Demo
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
