const Skills = () => {
    const skillsData = [
        {
            category: "Core Programming Languages",
            skills: [
                { name: "JavaScript", image: "javascript.png" },
                { name: "TypeScript", image: "typescript.png" },
                { name: "Python", image: "python.png" },
                { name: "SQL", image: "sql.png" },
                { name: "Bash", image: "bash.png" },
            ],
        },
        {
            category: "Backend Technologies",
            skills: [
                { name: "Node.js", image: "nodejs.png" },
                { name: "REST API", image: "api.png" },
                { name: "Express", image: "express.png" },
                { name: "JWT Authentication", image: "jwt.png" },
                { name: "RBAC Access Control", image: "rbac.png" },
                { name: "Winston Logger", image: "winston.png" },
            ],
        },
        {
            category: "Frontend Technologies",
            skills: [
                { name: "React JS", image: "reactjs.png" },
                { name: "HTML5", image: "html.png" },
                { name: "CSS3", image: "css.png" },
                { name: "Tailwind CSS", image: "tailwindcss.png" },
                { name: "Shadcn UI", image: "shadcn.png" },
                { name: "React Router DOM", image: "react-router.png" },
                { name: "Vite", image: "vite.png" },
                { name: "Next.js", image: "nextjs.png" },
            ],
        },
        {
            category: "Database Technologies",
            skills: [
                { name: "PostgreSQL", image: "postgresql.png" },
                { name: "MongoDB", image: "mongodb.png" },
                { name: "Prisma ORM", image: "prisma.png" },
                { name: "MySQL", image: "mysql.png" },
                { name: "Supabase", image: "supabase.png" },
            ],
        },
        {
            category: "DevOps & Testing",
            skills: [
                { name: "Docker", image: "docker.png" },
                { name: "Docker Compose", image: "compose.png" },
                { name: "Logging", image: "logging.png" },
                { name: "Postman", image: "postman.png" },
                { name: "Unit Testing", image: "unit-testing.png" },
                { name: "Jest", image: "jest.png" },
            ],
        },
        {
            category: "Developer Tools and AI",
            skills: [
                { name: "Git", image: "git.png" },
                { name: "ChatGPT", image: "chatgpt.png" },
                { name: "Cursor AI", image: "cursor.png" },
                { name: "VS Code", image: "vscode.png" },
                { name: "Prompt Engineering", image: "prompt.png" },
                { name: "GitHub", image: "github.png" },
            ],
        },
        {
            category: "Operating Systems",
            skills: [
                { name: "Windows", image: "windows.png" },
                { name: "Linux", image: "linux.png" },
                { name: "Ubuntu", image: "ubuntu.png" },
            ],
        },
        {
            category: "Mobile & Desktop Development",
            skills: [
                { name: "React Native", image: "expo.png" },
                { name: "Electron", image: "electron.png" },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical Skills
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-3 h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((category, index) => (
                        <div key={index} className="group">
                            {/* Skill Card */}
                            <div
                                className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Animated gradient circles at corners */}
                                <div className="absolute top-2 left-2 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                                <div
                                    className="absolute top-2 right-2 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.5s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 left-2 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "1s" }}
                                ></div>
                                <div
                                    className="absolute bottom-2 right-2 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "1.5s" }}
                                ></div>

                                {/* Category Title */}
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {category.category}
                                </h3>

                                {/* Gradient Line */}
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-6"></div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex flex-col items-center space-y-2"
                                            >
                                                {/* Skill Icon */}
                                                <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                                    <img
                                                        src={`/images/${skill.image}`}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                {/* Skill Name */}
                                                <span className="text-xs text-gray-300 text-center">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ),
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

export default Skills;
