import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Chatbot",
            period: "April 2025 - May 2025",
            description: [
                "Built an intelligent chatbot using advanced NLP techniques",
                "Implemented real-time response generation and context awareness",
                "Deployed with scalable cloud infrastructure",
            ],
            technologies: ["React", "Node.js", "OpenAI API", "WebSocket"],
            hasLiveDemo: true,
            hasCode: true,
        },
        {
            title: "Movie Mahal",
            period: "April 2025 - May 2025",
            description: [
                "Created a movie discovery platform with personalized recommendations",
                "Integrated multiple movie databases and APIs",
                "Developed user authentication and rating system",
            ],
            technologies: ["React", "Express", "MongoDB", "TMDB API"],
            hasLiveDemo: true,
            hasCode: true,
        },
        {
            title: "Task Management System",
            period: "April 2025 - May 2025",
            description: [
                "Designed and built a comprehensive task management application",
                "Implemented drag-and-drop functionality and real-time updates",
                "Created team collaboration features and progress tracking",
            ],
            technologies: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
            hasLiveDemo: true,
            hasCode: true,
        },
    ];

    return (
        <section
            id="projects"
            className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
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
                            <div className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 flex flex-col h-full">
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
