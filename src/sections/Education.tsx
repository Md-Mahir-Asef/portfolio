import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            degree: "Diploma in Computer Science and Technology",
            institution: "Dhaka Polytechnic Institute",
            location: "Tejgaon-1208, Dhaka, Bangladesh",
            period: "2025 - 2029 (Expected)",
            gpa: "3.85/4.00",
            achievements: [
                "Built multiple backend systems alongside academic studies",
                "Applied clean architecture principles in semester-based software projects",
                "Designed and developed a full-stack e-commerce system as a major practical project",
            ],
            coursework: [
                "Programming in Python",
                "Web Development",
                "Software Engineering",
                "Graphics Design -I & II",
                "Mathematics - I & II",
                "Physics - I & II",
                "Electricity - I",
                "Electronics - I",
            ],
        },
        {
            degree: "Secondary School Certificate",
            institution: "Rani Bilashmoni Government Boys' High School",
            location: "Gazipur, Bangladesh",
            period: "2023 - 2025",
            gpa: "5.00/5.00",
            achievements: [
                "Golden GPA-5.00",
                "Science Fair Participant",
                "Built a mobile app using React Native to control an arduino robot",
            ],
            coursework: [
                "Mathematics",
                "Higher Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Bengali",
                "Bangladesh & Global Studies",
            ],
        },
    ];

    return (
        <section
            id="education"
            className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Education
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-3 h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="group">
                            {/* Education Card */}
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

                                {/* Header with Icon */}
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                        <GraduationCap className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-gray-300 font-medium mb-2">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center text-gray-400 text-sm space-x-4">
                                            <span className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {edu.location}
                                            </span>
                                            <span className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {edu.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* GPA Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-linear-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-medium">
                                        GPA: {edu.gpa}
                                    </span>
                                </div>

                                {/* Gradient Line */}
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-4"></div>

                                {/* Achievements */}
                                <div className="mb-4">
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Achievements
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {edu.achievements.map(
                                            (achievement, achIndex) => (
                                                <li
                                                    key={achIndex}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-blue-400 mr-2">
                                                        •
                                                    </span>
                                                    <span className="text-sm">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                {/* Relevant Coursework */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Relevant Coursework
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.coursework.map(
                                            (course, courseIndex) => (
                                                <span
                                                    key={courseIndex}
                                                    className="px-2 py-1 bg-[#2A2A2A] text-gray-300 text-xs rounded-full border border-[#444444]"
                                                >
                                                    {course}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
