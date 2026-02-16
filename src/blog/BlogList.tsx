import Footer from "../sections/Footer";
import Header from "../sections/Header";
import BlogCard from "./components/BlogCard";
import { getBlogPosts } from "./blogUtils";
import useScrollReveal from "../hooks/useScrollReveal";
import ScrollProgress from "../components/ScrollProgress";

export default function BlogList() {
    const BLOGS_PER_PAGE = 9;
    useScrollReveal();
    const blogPosts = getBlogPosts();

    return (
        <div>
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 scroll-reveal">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Blog & Articles
                        </span>
                    </h1>
                    <p
                        className="text-xl text-gray-300 max-w-3xl mx-auto scroll-reveal"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Thoughts, tutorials, and insights about software
                        development, system design, and technology trends.
                        Sharing my journey as a full-stack developer.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
