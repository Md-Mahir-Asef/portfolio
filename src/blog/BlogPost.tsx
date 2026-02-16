import { useParams } from "react-router-dom";
import { getBlogPostBySlug } from "./blogUtils";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const Post = getBlogPostBySlug(slug || "");

    if (!Post) {
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

    return <Post />;
}
