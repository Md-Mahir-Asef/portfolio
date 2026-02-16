import type { BlogPost } from "./components/BlogCard";
import { blogPosts } from "./blogRegister";
import { postComponents } from "./blogRegister";

export const getBlogPosts = (): BlogPost[] => {
    return blogPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
};

export const getBlogPostBySlug = (
    slug: string,
): React.ComponentType | undefined => {
    return postComponents[slug as keyof typeof postComponents];
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
    return blogPosts.filter((post) => post.tags.includes(tag));
};

export const getBlogPostsByPage = (
    page: number,
    postsPerPage: number,
): BlogPost[] | undefined => {
    try {
        const sortedPosts = getBlogPosts();
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return sortedPosts.slice(startIndex, endIndex);
    } catch (err) {
        console.log(err);
    }
};

export const getTotalPages = (postsPerPage: number): number => {
    return Math.ceil(getBlogPosts().length / postsPerPage);
};
