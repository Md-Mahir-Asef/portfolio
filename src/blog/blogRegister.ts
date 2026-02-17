import type { BlogPost } from "./components/BlogCard";
import AutoResizingTextareaBlog, {
    metaData as AutoResizingTextareaBlogMetaData,
} from "./posts/AutoResizingTextareaBlog";

// Add New Post Here
export const postMetaDatas = [AutoResizingTextareaBlogMetaData];

// Add New Post Here
export const postComponents = {
    "auto-resizing-textareas": AutoResizingTextareaBlog,
};

export const blogPosts: BlogPost[] = [];

for (const post of postMetaDatas) {
    blogPosts.push({
        id: post.slug,
        title: post.title,
        excerpt: post.description,
        date: post.date,
        readTime: post.read_time,
        slug: post.slug,
        tags: post.tags,
    });
}
