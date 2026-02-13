import { useState } from "react";
import { Download, FileText, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";
import useScrollReveal from "../hooks/useScrollReveal";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    useScrollReveal();

    const handlePdfLoad = () => {
        setIsLoading(false);
    };

    const handlePdfError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/docs/CV of Mahir.pdf";
        link.download = "CV of Mahir.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleContactNavigation = () => {
        // Navigate to home page first
        navigate("/");

        // Wait for page to load, then scroll to contact section
        const scrollToContact = (attempt = 1) => {
            const contactElement = document.getElementById("contact");
            if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
            } else if (attempt < 3) {
                // Retry with increasing delays if element not found
                setTimeout(() => scrollToContact(attempt + 1), attempt * 100);
            }
        };

        setTimeout(scrollToContact, 100);
    };

    return (
        <div
            className="min-h-screen text-white"
            style={{ background: "oklch(21% 0.034 264.665)" }}
        >
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            My Resume
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Explore my professional journey, skills, and
                        experiences. Download a copy for your reference or view
                        it directly below.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={downloadResume}
                            className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </button>

                        <a
                            href="/docs/CV of Mahir.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-300 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Open in New Tab
                        </a>
                    </div>
                </div>
            </section>

            {/* PDF Viewer Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                        {/* PDF Header */}
                        <div className="bg-gray-700 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FileText className="w-6 h-6 text-blue-400" />
                                <h2 className="text-lg font-semibold">
                                    CV of Mahir.pdf
                                </h2>
                            </div>
                            <button
                                onClick={downloadResume}
                                className="flex items-center gap-2 text-sm bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg transition-colors duration-200"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>

                        {/* PDF Container */}
                        <div
                            className="relative bg-gray-100"
                            style={{ height: "800px" }}
                        >
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                        <p className="text-gray-300">
                                            Loading resume...
                                        </p>
                                    </div>
                                </div>
                            )}

                            {hasError ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                                    <div className="text-center px-6">
                                        <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            Unable to display PDF
                                        </h3>
                                        <p className="text-gray-400 mb-6">
                                            Your browser may not support inline
                                            PDF viewing. Please download the
                                            resume to view it.
                                        </p>
                                        <button
                                            onClick={downloadResume}
                                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mx-auto"
                                        >
                                            <Download className="w-5 h-5" />
                                            Download Resume
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    src="/docs/CV of Mahir.pdf"
                                    className="w-full h-full border-0"
                                    title="Resume PDF Viewer"
                                    onLoad={handlePdfLoad}
                                    onError={handlePdfError}
                                />
                            )}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-4">
                            Having trouble viewing the resume? Try downloading
                            it or opening in a new tab.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={downloadResume}
                                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                            >
                                Download PDF
                            </button>
                            <span className="text-gray-600">•</span>
                            <a
                                href="/docs/CV of Mahir.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                            >
                                Open in New Tab
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal bg-gray-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Interested in working together?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        I'm always open to discussing new opportunities and
                        interesting projects.
                    </p>
                    <button
                        onClick={handleContactNavigation}
                        className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get In Touch
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Resume;
