import { useParams } from "react-router-dom";
import { getBlogPostBySlug } from "./blogUtils";
import BuildingScalableApis from "./posts/BuildingScalableApis";
import AdvancedPostgreSQLPatterns from "./posts/AdvancedPostgreSQLPatterns";
import ReactPerformanceOptimizationClean from "./posts/ReactPerformanceOptimizationClean";
import MicroservicesArchitecture from "./posts/MicroservicesArchitecture";
import TypeScriptAdvancedTypes from "./posts/TypeScriptAdvancedTypes";

const blogPostComponents = {
    "building-scalable-apis-nodejs-typescript": BuildingScalableApis,
    "advanced-postgresql-patterns": AdvancedPostgreSQLPatterns,
    "react-performance-optimization": ReactPerformanceOptimizationClean,
    "microservices-architecture-guide": MicroservicesArchitecture,
    "typescript-advanced-types-patterns": TypeScriptAdvancedTypes,
};

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = getBlogPostBySlug(slug || "");

    if (
        !post ||
        !blogPostComponents[post.slug as keyof typeof blogPostComponents]
    ) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Blog Post Not Found
                    </h1>
                    <p className="text-gray-400">
                        The blog post you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    const BlogPostComponent =
        blogPostComponents[post.slug as keyof typeof blogPostComponents];

    return <BlogPostComponent />;
}
