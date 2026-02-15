import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: number;
    slug: string;
    tags: string[];
}

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300 block h-full"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Animated gradient circles at corners - signature animation */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
            <div
                className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                style={{ animationDelay: "0.2s" }}
            ></div>
            <div
                className="absolute bottom-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                style={{ animationDelay: "0.4s" }}
            ></div>
            <div
                className="absolute bottom-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                style={{ animationDelay: "0.6s" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-[#2A2A2A] border border-[#444444] rounded-md text-xs text-gray-300"
                        >
                            <Tag className="w-3 h-3" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 truncate group-hover:text-purple-400 transition-colors duration-200">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 grow">
                    {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min read
                    </div>
                </div>

                {/* Read More Indicator */}
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-200">
                        Read more
                    </span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform duration-200" />
                </div>

                {/* Gradient Divider */}
                <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 opacity-30"></div>
            </div>
        </Link>
    );
};

export default BlogCard;
