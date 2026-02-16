import type { BlogPost } from "./components/BlogCard";
import { metaData as AdvancedPostgreSQLPatterns } from "./posts/AdvancedPostgreSQLPatterns";
import { metaData as BuildingScalableApis } from "./posts/BuildingScalableApis";
import { metaData as MicroservicesArchitecture } from "./posts/MicroservicesArchitecture";
import { metaData as ReactPerformanceOptimizationClean } from "./posts/ReactPerformanceOptimizationClean";
import { metaData as ReactPerformanceOptimization } from "./posts/ReactPerformanceOptimization";
import { metaData as ReactPerformanceOptimizationFixed } from "./posts/ReactPerformanceOptimizationFixed";
import { metaData as TypeScriptAdvancedTypes } from "./posts/TypeScriptAdvancedTypes";
import { metaData as JavaScriptTipsAndTricks } from "./posts/JavaScriptTipsAndTricks";
import { metaData as CSSGridLayout } from "./posts/CSSGridLayout";
import { metaData as PythonDataScience } from "./posts/PythonDataScience";
import { metaData as WebSecurityBasics } from "./posts/WebSecurityBasics";
import { metaData as GitWorkflow } from "./posts/GitWorkflow";
import { metaData as NodeJsMicroservices } from "./posts/NodeJsMicroservices";
import { metaData as ReactHooksAdvanced } from "./posts/ReactHooksAdvanced";
import { metaData as DevOpsPipeline } from "./posts/DevOpsPipeline";
import { metaData as CloudNativeApps } from "./posts/CloudNativeApps";

const posts = [
    AdvancedPostgreSQLPatterns,
    BuildingScalableApis,
    MicroservicesArchitecture,
    ReactPerformanceOptimization,
    ReactPerformanceOptimizationClean,
    ReactPerformanceOptimizationFixed,
    TypeScriptAdvancedTypes,
    JavaScriptTipsAndTricks,
    CSSGridLayout,
    PythonDataScience,
    WebSecurityBasics,
    GitWorkflow,
    NodeJsMicroservices,
    ReactHooksAdvanced,
    DevOpsPipeline,
    CloudNativeApps,
];

export const blogPosts: BlogPost[] = [];

for (const post of posts) {
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

export const getBlogPosts = (): BlogPost[] => {
    return blogPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find((post) => post.slug === slug);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
    return blogPosts.filter((post) => post.tags.includes(tag));
};
