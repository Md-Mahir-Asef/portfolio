import type React from "react";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogLayout({
    title,
    slug,
    tags,
    date,
    read_time,
    description,
    children,
}: {
    title: string;
    slug: string;
    tags: string[];
    date: string;
    read_time: string;
    description: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Animated gradient circles at corners */}
            <div className="fixed top-4 left-4 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink z-10"></div>
            <div
                className="fixed top-4 right-4 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink z-10"
                style={{ animationDelay: "0.2s" }}
            ></div>
            <div
                className="fixed bottom-4 left-4 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink z-10"
                style={{ animationDelay: "0.4s" }}
            ></div>
            <div
                className="fixed bottom-4 right-4 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink z-10"
                style={{ animationDelay: "0.6s" }}
            ></div>

            {/* Back to Blog Button */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link
                    to="/blog/page/1"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span>Back to Blog</span>
                </Link>
            </div>

            {/* Article Header */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <header className="mb-12">
                    {/* Title with slug */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                {title}
                            </span>
                        </h1>
                        <span className="text-gray-500 text-sm font-mono opacity-60 mt-2 sm:mt-0">
                            /{slug}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {description}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={date}>
                                {new Date(date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{read_time} min read</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-[#2A2A2A] border border-[#444444] rounded-md text-sm text-gray-300 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Gradient Divider */}
                    <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
                </header>

                {/* Article Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                    <div className="text-gray-300 leading-relaxed space-y-6">
                        {children}
                    </div>
                </div>
            </article>
        </div>
    );
}
