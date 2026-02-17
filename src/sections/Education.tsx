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
            className="bg-gray-900 text-white py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-6 lg:px-8 scroll-reveal"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12 xs:mb-16">
                    <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
                        Education
                    </h2>
                    {/* Decorative gradient elements */}
                    <div className="flex justify-center space-x-2 xs:space-x-4 mb-6 xs:mb-8">
                        <div className="w-12 xs:w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="w-2 xs:w-3 h-2 xs:h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-12 xs:w-16 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="group">
                            {/* Education Card */}
                            <div
                                className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 xs:p-6 scroll-reveal"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Animated gradient circles at corners */}
                                <div className="absolute top-1 xs:top-2 left-1 xs:left-2 w-3 xs:w-4 h-3 xs:h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
                                <div
                                    className="absolute top-1 xs:top-2 right-1 xs:right-2 w-3 xs:w-4 h-3 xs:h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "0.5s" }}
                                ></div>
                                <div
                                    className="absolute bottom-1 xs:bottom-2 left-1 xs:left-2 w-3 xs:w-4 h-3 xs:h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "1s" }}
                                ></div>
                                <div
                                    className="absolute bottom-1 xs:bottom-2 right-1 xs:right-2 w-3 xs:w-4 h-3 xs:h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                                    style={{ animationDelay: "1.5s" }}
                                ></div>

                                {/* Header with Icon */}
                                <div className="flex items-start space-x-3 xs:space-x-4 mb-3 xs:mb-4">
                                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-1.5 xs:p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                                        <GraduationCap className="w-5 h-5 xs:w-6 xs:h-6 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg xs:text-xl font-semibold text-white mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-gray-300 font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                                            {edu.institution}
                                        </p>
                                        <div className="flex flex-col xs:flex-row xs:items-center text-gray-400 text-xs xs:text-sm space-y-1 xs:space-y-0 xs:space-x-4">
                                            <span className="flex items-center">
                                                <MapPin className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                                                {edu.location}
                                            </span>
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                                                {edu.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* GPA Badge */}
                                <div className="mb-3 xs:mb-4">
                                    <span className="inline-block px-2 xs:px-3 py-1 bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs xs:text-sm rounded-full font-medium">
                                        GPA: {edu.gpa}
                                    </span>
                                </div>

                                {/* Gradient Line */}
                                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-3 xs:mb-4"></div>

                                {/* Achievements */}
                                <div className="mb-3 xs:mb-4">
                                    <h4 className="text-base xs:text-lg font-semibold text-white mb-2">
                                        Achievements
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {edu.achievements.map(
                                            (achievement, achIndex) => (
                                                <li
                                                    key={achIndex}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-blue-400 mr-1 xs:mr-2">
                                                        •
                                                    </span>
                                                    <span className="text-xs xs:text-sm">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                {/* Relevant Coursework */}
                                <div>
                                    <h4 className="text-base xs:text-lg font-semibold text-white mb-2">
                                        Relevant Coursework
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 xs:gap-2">
                                        {edu.coursework.map(
                                            (course, courseIndex) => (
                                                <span
                                                    key={courseIndex}
                                                    className="px-1.5 xs:px-2 py-1 bg-[#2A2A2A] text-gray-300 text-xs rounded-full border border-[#444444]"
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
